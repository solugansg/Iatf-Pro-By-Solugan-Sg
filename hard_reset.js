const fs = require('fs');
const path = require('path');
const appPath = path.resolve(__dirname, 'app_core.js');

let content = fs.readFileSync(appPath, 'utf8');

const target = `    if(parsed.insumos) {
      for(let k in parsed.insumos) {
        if(state.insumos[k]) {
          Object.assign(state.insumos[k], parsed.insumos[k]);
        }
      }
    }`;

const newTarget = `    if(parsed.insumos) {
      for(let k in parsed.insumos) {
        if(state.insumos[k]) {
          Object.assign(state.insumos[k], parsed.insumos[k]);
        }
      }
    }
    
    // HARD RESET ABSOLUTO: Limpiar caché corrupta 1 sola vez
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

const targetCRLF = target.replace(/\n/g, '\r\n');

if (content.includes(target)) {
    content = content.replace(target, newTarget);
    fs.writeFileSync(appPath, content, 'utf8');
    console.log("Hard reset added to loadState.");
} else if (content.includes(targetCRLF)) {
    content = content.replace(targetCRLF, newTarget);
    fs.writeFileSync(appPath, content, 'utf8');
    console.log("Hard reset added to loadState (CRLF).");
} else {
    console.log("Target in loadState not found.");
}
