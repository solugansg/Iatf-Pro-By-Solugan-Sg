const fs = require('fs');
const path = 'C:\\Users\\JAN\\Documents\\App Solugan Sg\\Iatf Pro\\app.js';
let content = fs.readFileSync(path, 'utf8');

const target = `            for (let k in gData.insumos) {
              if (state.insumos[k]) {
                Object.assign(state.insumos[k], gData.insumos[k]);
              }
            }`;

const replacement = `            for (let k in gData.insumos) {
              if (state.insumos[k]) {
                Object.assign(state.insumos[k], gData.insumos[k]);
                // FORCE 0 FOR GLOBAL FIREBASE LOAD
                state.insumos[k].def = 0;
                state.insumos[k].resx1 = 0;
                state.insumos[k].resx2 = 0;
                if (['gen','retdib','mo1','mo2','opu','dx1','dx2','iate'].includes(k)) {
                  state.insumos[k].valorFrasco = 0;
                }
              }
            }`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Firebase Global Load intercepted successfully (LF).");
} else {
  console.log("Target not found!");
}
