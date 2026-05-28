const fs = require('fs');
const path = 'C:\\Users\\JAN\\Documents\\App Solugan Sg\\Iatf Pro\\app.js';
let content = fs.readFileSync(path, 'utf8');

const target = `  // Desbloquear si no   if(confirm("¿Restaurar protocolos originales? Se perderán los cambios actuales.")) {
    state.matriz = JSON.parse(JSON.stringify(window.DEFAULT_MATRIZ));`;

const replacement = `  // Desbloquear si no lo está
  if(!isMatrixUnlocked) {
    unlockMatriz();
  }
}

window.restaurarProtocolosBase = function() {
  if (!isMatrixUnlocked) {
    unlockMatriz();
    if (!isMatrixUnlocked) return;
  }
  if(confirm("¿Restaurar protocolos originales? Se perderán los cambios actuales.")) {
    state.matriz = JSON.parse(JSON.stringify(window.DEFAULT_MATRIZ));`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Fixed!");
} else {
  console.log("Target not found!");
}
