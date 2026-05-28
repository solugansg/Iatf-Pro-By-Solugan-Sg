const fs = require('fs');
const path = require('path');
const appPath = path.resolve(__dirname, 'app_core.js');

let content = fs.readFileSync(appPath, 'utf8');

const targetHardReset = `    // HARD RESET ABSOLUTO: Limpiar caché corrupta 1 sola vez
    if (!localStorage.getItem('reprocost_hard_reset_v26')) {
      for (let k in state.insumos) {
        state.insumos[k].def = 0;
        state.insumos[k].resx1 = 0;
        state.insumos[k].resx2 = 0;
        if (['gen','retdib','mo1','mo2','opu','dx1','dx2','iate'].includes(k)) {
          state.insumos[k].valorFrasco = 0;
        }
      }
      localStorage.setItem('reprocost_hard_reset_v26', 'true');
    }`;

const targetHardResetCRLF = targetHardReset.replace(/\n/g, '\r\n');

if (content.includes(targetHardReset)) {
    content = content.replace(targetHardReset, '');
    console.log("Hard reset removed.");
} else if (content.includes(targetHardResetCRLF)) {
    content = content.replace(targetHardResetCRLF, '');
    console.log("Hard reset removed (CRLF).");
} else {
    console.log("Hard reset not found.");
}

const newFunction = `
window.ponerDosisEnCeroModal = function() {
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
};
`;

content += newFunction;

fs.writeFileSync(appPath, content, 'utf8');
console.log("Function added to app_core.js");
