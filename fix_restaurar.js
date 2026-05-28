const fs = require('fs');
const path = 'C:\\Users\\JAN\\Documents\\App Solugan Sg\\Iatf Pro\\app.js';
let content = fs.readFileSync(path, 'utf8');

// Fix the garbled code
const brokenStart = `  if(confirm("¿Restaurar protocolos originales de Solugan SG? Se perderán los cambios actuales.")) {`;
// Find index of brokenStart
let idx = content.indexOf(`window.restaurarProtocolosBase = function() {`);
if (idx !== -1) {
    let endIdx = content.indexOf(`}`, content.indexOf(`alert("Protocolos base restaurados correctamente.");`, idx));
    if (endIdx !== -1) {
        const replacement = `window.restaurarProtocolosBase = function() {
  if (!isMatrixUnlocked) {
    unlockMatriz();
    if (!isMatrixUnlocked) return;
  }
  if(confirm("¿Restaurar protocolos originales? Se perderán los cambios actuales.")) {
    state.matriz = JSON.parse(JSON.stringify(window.DEFAULT_MATRIZ));
    renderMatriz(); saveState(); alert("Protocolos base restaurados correctamente.");
  }`;
        content = content.substring(0, idx) + replacement + content.substring(endIdx + 1);
        fs.writeFileSync(path, content, 'utf8');
        console.log("restaurarProtocolosBase fixed.");
    }
}
