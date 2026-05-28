const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname, 'index.html');
const jsPath = path.resolve(__dirname, 'app_master.js');

// 1. Revertir index.html
let html = fs.readFileSync(htmlPath, 'utf8');

const targetHeaderRevert = `<div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
  <h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 0.75rem; color: var(--accent);">
    <i data-lucide="package"></i> Configuración precios y dosis
  </h2>
  <button class="btn" onclick="window.limpiarValoresGlobales()" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); font-size: 0.8rem; padding: 0.4rem 0.8rem;">
    <i data-lucide="trash-2" style="width:14px;height:14px;"></i> Limpiar Valores
  </button>
</div>`;

const targetHeaderRevertCRLF = targetHeaderRevert.replace(/\n/g, '\r\n');

const originalHeader = `<h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 0.75rem; color: var(--accent);">
                <i data-lucide="package"></i> Configuración precios y dosis</h2>`;

if (html.includes(targetHeaderRevert)) {
    html = html.replace(targetHeaderRevert, originalHeader);
} else if (html.includes(targetHeaderRevertCRLF)) {
    html = html.replace(targetHeaderRevertCRLF, originalHeader);
}

// Restaurar botón abajo
const bottomButtons = `<button class="btn btn-secondary" onclick="cerrarModalPrecios()"
              style="margin-right:0.5rem">Cancelar</button>`;
const bottomButtonsCRLF = bottomButtons.replace(/\n/g, '\r\n');

const restoredBottom = `<button class="btn" onclick="window.ponerDosisEnCeroModal()" style="margin-right:0.5rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);">Poner Dosis en 0</button>
            <button class="btn btn-secondary" onclick="cerrarModalPrecios()"
              style="margin-right:0.5rem">Cancelar</button>`;

if (html.includes(bottomButtons)) {
    html = html.replace(bottomButtons, restoredBottom);
} else if (html.includes(bottomButtonsCRLF)) {
    html = html.replace(bottomButtonsCRLF, restoredBottom);
}

fs.writeFileSync(htmlPath, html, 'utf8');

// 2. Revertir app_master.js
let js = fs.readFileSync(jsPath, 'utf8');

const targetLimpiar = `window.limpiarValoresGlobales = function() {
  if (confirm("¿Estás seguro de que quieres Limpiar Valores? Esto dejará todas las dosis y precios en 0, y todos los parámetros técnicos (días y horas) de todos los protocolos en vacío (-).")) {
    // 1. Dosis y precios a 0
    for (let k in state.insumos) {
      state.insumos[k].def = 0;
      state.insumos[k].resx1 = 0;
      state.insumos[k].resx2 = 0;
      state.insumos[k].valorFrasco = 0;
    }
    
    // 2. Parte técnica de protocolos a '-'
    if (state.matriz) {
      state.matriz.forEach(protocol => {
        if (protocol.days) protocol.days = protocol.days.map(() => '-');
        if (protocol.hours) protocol.hours = protocol.hours.map(() => '--:--');
        if (protocol.ia) protocol.ia = '-';
      });
    }

    // Guardar y refrescar
    if (typeof window.saveStateToFirestore === 'function') {
      window.saveStateToFirestore();
    } else {
      window.saveState();
    }
    
    window.cerrarModalPrecios();
    if (typeof renderMatriz === 'function') renderMatriz();
    alert("Todos los valores han sido limpiados y guardados en 0 / -.");
  }
};`;

const targetLimpiarCRLF = targetLimpiar.replace(/\n/g, '\r\n');

const restoredFunc = `window.ponerDosisEnCeroModal = function() {
  const inputs = document.querySelectorAll('#tabla-modal-precios input[id^="mod-def-"]');
  inputs.forEach(input => {
    const id = input.id.replace('mod-def-', '');
    if (!['dib','opu','mo1','mo2','retdib','dx1','dx2','iate','gen'].includes(id)) {
       input.value = 0;
    }
  });
  if (typeof window.recalcCostosModal === 'function') {
    window.recalcCostosModal();
  }
};`;

if (js.includes(targetLimpiar)) {
    js = js.replace(targetLimpiar, restoredFunc);
} else if (js.includes(targetLimpiarCRLF)) {
    js = js.replace(targetLimpiarCRLF, restoredFunc);
}

fs.writeFileSync(jsPath, js, 'utf8');

console.log("Reverted to previous version logic.");
