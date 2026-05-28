const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname, 'index.html');
const jsPath = path.resolve(__dirname, 'app_master.js');

// 1. Modificar index.html
let html = fs.readFileSync(htmlPath, 'utf8');

// Quitar el botón viejo
const oldButton = `<button class="btn" onclick="window.ponerDosisEnCeroModal()" style="margin-right:0.5rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);">Poner Dosis en 0</button>`;
const oldButtonCRLF = oldButton.replace(/\n/g, '\r\n');
html = html.replace(oldButton, '');
html = html.replace(oldButtonCRLF, '');

// Agregar el nuevo botón en la parte de arriba del modal
const targetHeader = `<h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 0.75rem; color: var(--accent);">
                <i data-lucide="package"></i> Configuración precios y dosis</h2>`;
const targetHeaderCRLF = targetHeader.replace(/\n/g, '\r\n');

const newHeader = `<div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
  <h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 0.75rem; color: var(--accent);">
    <i data-lucide="package"></i> Configuración precios y dosis
  </h2>
  <button class="btn" onclick="window.limpiarValoresGlobales()" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); font-size: 0.8rem; padding: 0.4rem 0.8rem;">
    <i data-lucide="trash-2" style="width:14px;height:14px;"></i> Limpiar Valores
  </button>
</div>`;

if (html.includes(targetHeader)) {
    html = html.replace(targetHeader, newHeader);
} else if (html.includes(targetHeaderCRLF)) {
    html = html.replace(targetHeaderCRLF, newHeader);
}
fs.writeFileSync(htmlPath, html, 'utf8');

// 2. Modificar app_master.js
let js = fs.readFileSync(jsPath, 'utf8');

const targetFunc = `window.ponerDosisEnCeroModal = function() {
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
const targetFuncCRLF = targetFunc.replace(/\n/g, '\r\n');

const newFunc = `window.limpiarValoresGlobales = function() {
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

if (js.includes(targetFunc)) {
    js = js.replace(targetFunc, newFunc);
} else if (js.includes(targetFuncCRLF)) {
    js = js.replace(targetFuncCRLF, newFunc);
} else {
    // Si por alguna razón no lo encuentra, lo añadimos al final
    js += '\n' + newFunc;
}

fs.writeFileSync(jsPath, js, 'utf8');
console.log("Button moved and logic updated.");
