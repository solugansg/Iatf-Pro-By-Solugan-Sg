const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'iatf-app.js');
let code = fs.readFileSync(appPath, 'utf8');

// Find the start of window.buscarPorNit
const startStr = "window.buscarPorNit = function() {";
const startIdx = code.indexOf(startStr);

if (startIdx === -1) {
  console.log("No se encontro window.buscarPorNit");
  process.exit(1);
}

// Find the start of window.cargarDeHistorial which is right after
const endStr = "window.cargarDeHistorial = function(id) {";
const endIdx = code.indexOf(endStr, startIdx);

if (endIdx === -1) {
  console.log("No se encontro window.cargarDeHistorial");
  process.exit(1);
}

const newLogic = `window.buscarPorNit = function() {
  const term = document.getElementById('search-nit').value.trim();
  const fechaFiltro = document.getElementById('hist-fecha')?.value || '';
  
  let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  
  // MIGRACIÓN AUTOMÁTICA: Si hay reportes con N/A, asignarles el NIT del usuario actual
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  if (perfil.nit) {
    let changed = false;
    historial.forEach(r => {
      if (!r.nit || r.nit === 'N/A') {
        r.nit = perfil.nit;
        changed = true;
      }
    });
    if (changed) {
      localStorage.setItem('reprocost_historial', JSON.stringify(historial));
    }
  }

  // Filtrado
  const filtrados = historial.filter(r => {
    let coincideTermino = true;
    let coincideFecha = true;

    if (term) {
      const termClean = term.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const nitGuardado = String(r.nit || '');
      const nitClean = nitGuardado.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const fincaClean = String(r.finca || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      
      coincideTermino = nitClean.includes(termClean) || 
             nitGuardado.toLowerCase().includes(term.toLowerCase()) ||
             fincaClean.includes(termClean) ||
             String(r.finca || '').toLowerCase().includes(term.toLowerCase());
    }

    if (fechaFiltro) {
      // Comparar con la fecha del protocolo
      let fechaProtocoloStr = '';
      try {
        const piDate = r.state?.inputs?.pi?.fecha;
        if (piDate) {
          fechaProtocoloStr = piDate;
        } else if (r.fechaProtocolo) {
          // Extraer YYYY-MM-DD de r.fechaProtocolo (suele venir como DD/MM/YYYY)
          const partes = r.fechaProtocolo.split('/');
          if(partes.length === 3) fechaProtocoloStr = \`\${partes[2]}-\${partes[1]}-\${partes[0]}\`;
        }
      } catch(e) {}
      
      coincideFecha = fechaProtocoloStr === fechaFiltro;
    }

    return coincideTermino && coincideFecha;
  });

  const lista = document.getElementById('historial-lista');
  if (!lista) return;
  
  if (filtrados.length > 0) {
    // Ordenar de más reciente a más antiguo
    filtrados.reverse();
    
    lista.innerHTML = filtrados.map((r) => {
      // Obtener fecha de inicio del protocolo desde el estado guardado
      let fechaMostrar = r.fecha; // fallback: fecha de registro
      try {
        const piDate = r.state?.inputs?.pi?.fecha;
        if (piDate) {
          const d = new Date(piDate + 'T12:00:00');
          if (!isNaN(d.getTime())) {
            fechaMostrar = d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
          }
        } else if (r.fechaProtocolo) {
          fechaMostrar = r.fechaProtocolo;
        }
      } catch(e) { /* usar fallback */ }

      return \`
        <div class="historico-card" onclick="cargarDeHistorial(\${r.id})">
          <div class="hc-date">\${fechaMostrar}</div>
          <div class="hc-finca">\${r.finca}</div>
          <div style="font-size:0.78rem;color:var(--text-muted);">Protocolo: \${r.protocolo}</div>
          <div class="hc-meta">
            <span>🐄 <strong>\${r.animales}</strong> animales</span>
            <span>✅ <strong>\${r.preneces}</strong> preñeces</span>
            <span>💰 <strong>\${r.inversion}</strong></span>
          </div>
          <div style="display:flex;gap:0.5rem;margin-top:1rem;border-top:1px solid rgba(255,255,255,0.05);padding-top:0.75rem;">
            <button class="btn-outline-action btn-cargar" onclick="event.stopPropagation(); cargarDeHistorial(\${r.id})">
              <i data-lucide="eye" style="width:14px;height:14px;"></i> \${t("hist_btn_load")}
            </button>
            <button class="btn-outline-action btn-excel" onclick="event.stopPropagation(); exportarExcelDesdeHistorial(\${r.id})">
              <i data-lucide="file-spreadsheet" style="width:14px;height:14px;"></i> \${t("hist_btn_excel")}
            </button>
            <button class="btn-outline-action btn-eliminar" onclick="event.stopPropagation(); eliminarDeHistorial(\${r.id})">
              <i data-lucide="trash-2" style="width:14px;height:14px;"></i> \${t("hist_btn_delete")}
            </button>
          </div>
        </div>
      \`;
    }).join('');
    
    // Renderizar iconos
    setTimeout(() => {
      if(window.lucide) lucide.createIcons();
    }, 10);
  } else {
    lista.innerHTML = \`
      <div style="text-align:center; padding:3rem; color:var(--text-muted); background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed var(--glass-border);">
        <i data-lucide="inbox" style="width:48px; height:48px; margin-bottom:1rem; opacity:0.3;"></i>
        <p>No se encontraron registros que coincidan con la búsqueda.</p>
      </div>
    \`;
    setTimeout(() => {
      if(window.lucide) lucide.createIcons();
    }, 10);
  }
};

window.limpiarFiltrosHistorico = function() {
  document.getElementById('search-nit').value = '';
  const dateInput = document.getElementById('hist-fecha');
  if (dateInput) dateInput.value = '';
  
  const lista = document.getElementById('historial-lista');
  if (lista) {
    lista.innerHTML = \`
      <div style="text-align:center; padding:3rem; color:var(--text-muted); background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed var(--glass-border);">
        <i data-lucide="archive" style="width:48px; height:48px; margin-bottom:1rem; opacity:0.3;"></i>
        <p>Haz clic en "Actualizar" para cargar el histórico de registros.</p>
      </div>
    \`;
  }
  setTimeout(() => {
    if(window.lucide) lucide.createIcons();
  }, 10);
};

`;

code = code.substring(0, startIdx) + newLogic + code.substring(endIdx);
fs.writeFileSync(appPath, code, 'utf8');
console.log("Patch aplicado correctamente!");
