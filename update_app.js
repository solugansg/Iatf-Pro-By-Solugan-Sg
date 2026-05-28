const fs = require('fs');

const appJsPath = 'app.js';
let content = fs.readFileSync(appJsPath, 'utf8');

const startMarker = "// --- SISTEMA DE HISTORIAL Y BÚSQUEDA ---";
const endMarker = "window.resetPantallaResx1 = function() {";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found");
  process.exit(1);
}

const newBlock = `// --- SISTEMA DE HISTORIAL Y BÚSQUEDA ---
window.guardarEnHistorial = async function() {
  const ubicacion = document.getElementById('pi-ubicacion').value.trim();
  const finca = document.getElementById('pi-finca').value.trim();
  let perfilObj = {};
  try {
    perfilObj = JSON.parse(localStorage.getItem('reprocost_perfil')) || {};
  } catch(e) {}
  
  let nitValue = perfilObj.nit || 'N/A';
  if (nitValue === 'N/A' || nitValue === '') {
    nitValue = prompt("Para poder buscar este reporte después, por favor ingresa tu NIT:");
    if (!nitValue || nitValue.trim() === '') {
      alert("Operación cancelada. El NIT es necesario para guardar el reporte.");
      return;
    }
    nitValue = nitValue.trim();
    
    // Guardar el NIT ingresado para no volver a preguntarlo
    perfilObj.nit = nitValue;
    localStorage.setItem('reprocost_perfil', JSON.stringify(perfilObj));
    
    // Si hay usuario logueado, actualizar en Firestore
    if (typeof auth !== 'undefined' && auth.currentUser) {
      db.collection('users').doc(auth.currentUser.uid).set({ nit: nitValue }, { merge: true })
        .catch(err => console.warn('Error guardando NIT en Firebase:', err));
    }
  }
  
  if (!ubicacion || !finca) {
    alert("⚠️ Se requiere completar los campos 'Finca' y 'Ubicación' para guardar el reporte en el historial.");
    return;
  }
  
  // Mostrar feedback de carga
  const btnGuardar = document.querySelector('button[onclick="guardarEnHistorial()"]');
  const btnOriginalText = btnGuardar ? btnGuardar.innerHTML : '';
  if (btnGuardar) btnGuardar.innerHTML = '<i data-lucide="refresh-cw" class="spin"></i> Guardando...';
  
  let fullStateObj = {};
  try {
    const localSaved = localStorage.getItem('reprocost_state');
    if (localSaved) fullStateObj = JSON.parse(localSaved);
    else fullStateObj = JSON.parse(JSON.stringify(state));
  } catch (e) {
    fullStateObj = JSON.parse(JSON.stringify(state));
  }

  const reportId = Date.now();
  const report = {
    id: reportId,
    nit: nitValue,
    nitLower: nitValue.toLowerCase(),
    finca: finca,
    protocolo: document.getElementById('dash-protocolo').innerText,
    fechaProtocolo: document.getElementById('pi-fecha')?.value
      ? new Date(document.getElementById('pi-fecha').value + 'T12:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
      : new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    animales: document.getElementById('dash-animales').innerText,
    preneces: document.getElementById('res-total-preneces').innerText,
    inversion: document.getElementById('res-total-inversion').innerText,
    state: fullStateObj,
    uid: (typeof auth !== 'undefined' && auth.currentUser) ? auth.currentUser.uid : null,
    createdAt: typeof firebase !== 'undefined' ? firebase.firestore.FieldValue.serverTimestamp() : new Date()
  };

  try {
    // 1. Guardar en Firestore
    if (typeof db !== 'undefined') {
      await db.collection('history').doc(reportId.toString()).set(report);
    }
    
    // 2. Guardar en localStorage como respaldo local
    const localReport = Object.assign({}, report, { createdAt: reportId });
    let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
    historial.push(localReport);
    localStorage.setItem('reprocost_historial', JSON.stringify(historial));
    
    alert("✅ ¡Éxito! El reporte ha sido guardado en el historial (nube y local). Ahora podrás buscarlo por NIT cuando lo necesites.");
  } catch (error) {
    console.error("Error guardando en Firestore:", error);
    // Fallback: solo local
    const localReport = Object.assign({}, report, { createdAt: reportId });
    let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
    historial.push(localReport);
    localStorage.setItem('reprocost_historial', JSON.stringify(historial));
    alert("⚠️ El reporte se guardó de forma local (offline). Se sincronizará cuando haya conexión.");
  } finally {
    if (btnGuardar) {
      btnGuardar.innerHTML = btnOriginalText;
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  }
};

window.buscarPorNit = async function() {
  const term = document.getElementById('search-nit').value.trim();
  if (!term) {
    alert("Por favor ingresa un NIT para buscar.");
    return;
  }

  const btnBuscar = document.querySelector('button[onclick="buscarPorNit()"]');
  const origBtnHTML = btnBuscar ? btnBuscar.innerHTML : '';
  if (btnBuscar) btnBuscar.innerHTML = '<i data-lucide="refresh-cw" class="spin"></i> Buscando...';

  const container = document.getElementById('historial-resultados');
  const empty = document.getElementById('historial-vacio');
  const tbody = document.getElementById('lista-historial');
  tbody.innerHTML = '';

  let filtrados = [];
  const termLower = term.toLowerCase();

  try {
    if (typeof db !== 'undefined') {
      // 1. Buscar en Firestore
      const snapshot = await db.collection('history')
        .where('nitLower', '==', termLower)
        .get();
        
      snapshot.forEach(doc => {
        filtrados.push(doc.data());
      });
      
      // Si la búsqueda por 'nitLower' no retorna, buscamos por 'nit' normal para retrocompatibilidad
      if (filtrados.length === 0) {
        const snap2 = await db.collection('history')
          .where('nit', '==', term)
          .get();
        snap2.forEach(doc => {
          filtrados.push(doc.data());
        });
      }
    }
  } catch (err) {
    console.warn("Error buscando en Firestore, usando fallback local:", err);
  }

  // 2. Combinar con localStorage y deduplicar por 'id'
  const historialLocal = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  const filtradosLocal = historialLocal.filter(r => String(r.nit || '').toLowerCase().includes(termLower));
  
  filtradosLocal.forEach(localReq => {
    if (!filtrados.some(f => f.id === localReq.id)) {
      filtrados.push(localReq);
    }
  });

  // Ordenar descendente por ID (que actúa como timestamp)
  filtrados.sort((a, b) => b.id - a.id);

  if (filtrados.length > 0) {
    filtrados.forEach((r) => {
      let fechaMostrar = r.fecha;
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
      } catch(e) {}

      const tr = document.createElement('tr');
      tr.innerHTML = \`
        <td style="font-weight:bold; color:var(--text-muted);">\${fechaMostrar}</td>
        <td>\${r.finca}</td>
        <td style="font-size:0.85rem;">\${r.protocolo}</td>
        <td style="text-align:center;">\${r.animales}</td>
        <td style="text-align:center; color:var(--success); font-weight:bold;">\${r.preneces}</td>
        <td style="text-align:right; font-weight:bold;">\${r.inversion}</td>
        <td style="text-align:center; white-space:nowrap;">
          <button class="btn btn-secondary" onclick="cargarDeHistorial(\${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(14, 165, 233, 0.1); color: var(--accent); border: 1px solid var(--accent); margin-right: 5px;">
            <i data-lucide="eye" style="width:12px; height:12px;"></i> CARGAR
          </button>
          <button class="btn btn-secondary" onclick="exportarExcelDesdeHistorial(\${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid #10b981; margin-right: 5px;">
            <i data-lucide="file-spreadsheet" style="width:12px; height:12px;"></i> EXCEL
          </button>
          <button class="btn btn-danger" onclick="eliminarDeHistorial(\${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(239, 68, 68, 0.1); color: var(--danger); border: 1px solid var(--danger);">
            <i data-lucide="trash-2" style="width:12px; height:12px;"></i> ELIMINAR
          </button>
        </td>
      \`;
      tbody.appendChild(tr);
    });
    container.style.display = 'block';
    empty.style.display = 'none';
    if(typeof lucide !== 'undefined') lucide.createIcons();
  } else {
    container.style.display = 'none';
    empty.style.display = 'block';
    empty.innerHTML = \`
      <i data-lucide="search-x" style="width: 40px; height: 40px; margin-bottom: 1rem; color: var(--danger);"></i>
      <p>No se encontraron registros para el NIT: <strong>\${term}</strong></p>
    \`;
    if(typeof lucide !== 'undefined') lucide.createIcons();
  }
  
  if (btnBuscar) btnBuscar.innerHTML = origBtnHTML;
};

window.cargarDeHistorial = async function(id) {
  let record = null;
  // 1. Intentar Firestore
  try {
    if (typeof db !== 'undefined') {
      const doc = await db.collection('history').doc(id.toString()).get();
      if (doc.exists) {
        record = doc.data();
      }
    }
  } catch(e) {}
  
  // 2. Fallback localStorage
  if (!record) {
    const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
    record = historial.find(r => r.id === id);
  }
  
  if (!record) return;

  if (confirm(\`¿Deseas cargar el reporte de la finca "\${record.finca}" realizado el \${record.fecha}?\\n\\nNota: Esto reemplazará los datos actuales en pantalla.\`)) {
    const latestMatrixStr = localStorage.getItem('reprocost_custom_matriz');
    const newState = Object.assign({}, record.state);
    if (latestMatrixStr) {
      try {
        const parsedMatrix = JSON.parse(latestMatrixStr);
        if (Array.isArray(parsedMatrix)) {
          newState.matriz = window.migrarYSanitizarMatriz(parsedMatrix);
        }
      } catch(e) {}
    }
    localStorage.setItem('reprocost_state', JSON.stringify(newState));
    location.reload(); 
  }
};

window.eliminarDeHistorial = async function(id) {
  if (confirm("¿Estás seguro de que deseas eliminar este registro del historial permanentemente?")) {
    try {
      if (typeof db !== 'undefined') {
        await db.collection('history').doc(id.toString()).delete();
      }
    } catch(e) {
      console.warn("Error borrando de Firestore:", e);
    }
    
    let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
    historial = historial.filter(r => r.id !== id);
    localStorage.setItem('reprocost_historial', JSON.stringify(historial));
    // Refrescar la búsqueda
    buscarPorNit();
  }
};

window.exportarExcelDesdeHistorial = async function(id) {
  let record = null;
  try {
    if (typeof db !== 'undefined') {
      const doc = await db.collection('history').doc(id.toString()).get();
      if (doc.exists) record = doc.data();
    }
  } catch(e) {}
  if (!record) {
    const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
    record = historial.find(r => r.id === id);
  }
  if (!record) return;

  const originalStateStr = localStorage.getItem('reprocost_state');

  const restaurarEstado = () => {
    if (originalStateStr) {
      localStorage.setItem('reprocost_state', originalStateStr);
      loadState();
      if (typeof ejecutarProtocoloInicial === 'function') {
        const pv = document.getElementById('pi-protocolo')?.value;
        const fv = document.getElementById('pi-fecha')?.value;
        if (pv && fv) ejecutarProtocoloInicial();
      }
      if (typeof updateResultados === 'function') updateResultados();
      if (typeof calcTableroControl === 'function') calcTableroControl();
    } else {
      localStorage.removeItem('reprocost_state');
      location.reload();
    }
  };

  const latestMatrixStr = localStorage.getItem('reprocost_custom_matriz');
  const tempState = Object.assign({}, record.state);
  if (latestMatrixStr) {
    try {
      const parsedMatrix = JSON.parse(latestMatrixStr);
      if (Array.isArray(parsedMatrix)) {
        tempState.matriz = window.migrarYSanitizarMatriz(parsedMatrix);
      }
    } catch(e) {}
  }

  localStorage.setItem('reprocost_state', JSON.stringify(tempState));
  loadState();

  if (typeof ejecutarProtocoloInicial === 'function') {
    const pv = document.getElementById('pi-protocolo')?.value;
    const fv = document.getElementById('pi-fecha')?.value;
    if (pv && fv) ejecutarProtocoloInicial();
  }
  if (typeof updateResultados === 'function') updateResultados();
  if (typeof calcTableroControl === 'function') calcTableroControl();

  setTimeout(async () => {
    try {
      await window.exportarExcel();
    } catch (err) {
      console.error("Error al exportar Excel desde el historial:", err);
    } finally {
      restaurarEstado();
    }
  }, 150);
};

window.exportarPdfDesdeHistorial = async function(id) {
  let record = null;
  try {
    if (typeof db !== 'undefined') {
      const doc = await db.collection('history').doc(id.toString()).get();
      if (doc.exists) record = doc.data();
    }
  } catch(e) {}
  if (!record) {
    const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
    record = historial.find(r => r.id === id);
  }
  if (!record) return;

  const originalStateStr = localStorage.getItem('reprocost_state');

  const restaurarEstado = () => {
    if (originalStateStr) {
      localStorage.setItem('reprocost_state', originalStateStr);
      loadState();
      if (typeof ejecutarProtocoloInicial === 'function') {
        const pv = document.getElementById('pi-protocolo')?.value;
        const fv = document.getElementById('pi-fecha')?.value;
        if (pv && fv) ejecutarProtocoloInicial();
      }
      if (typeof updateResultados === 'function') updateResultados();
      if (typeof calcTableroControl === 'function') calcTableroControl();
    } else {
      localStorage.removeItem('reprocost_state');
      location.reload();
    }
  };

  const latestMatrixStr = localStorage.getItem('reprocost_custom_matriz');
  const tempState = Object.assign({}, record.state);
  if (latestMatrixStr) {
    try {
      const parsedMatrix = JSON.parse(latestMatrixStr);
      if (Array.isArray(parsedMatrix)) {
        tempState.matriz = window.migrarYSanitizarMatriz(parsedMatrix);
      }
    } catch(e) {}
  }

  localStorage.setItem('reprocost_state', JSON.stringify(tempState));
  loadState();

  if (typeof ejecutarProtocoloInicial === 'function') {
    const pv = document.getElementById('pi-protocolo')?.value;
    const fv = document.getElementById('pi-fecha')?.value;
    if (pv && fv) ejecutarProtocoloInicial();
  }
  if (typeof updateResultados === 'function') updateResultados();
  if (typeof calcTableroControl === 'function') calcTableroControl();

  setTimeout(() => {
    window.exportarPDF().then(() => {
      restaurarEstado();
    }).catch(err => {
      console.error("Error al exportar desde el historial:", err);
      restaurarEstado();
    });
  }, 1200);
};

`;

const newContent = content.substring(0, startIndex) + newBlock + content.substring(endIndex);
fs.writeFileSync(appJsPath, newContent, 'utf8');
console.log('Update successful!');
