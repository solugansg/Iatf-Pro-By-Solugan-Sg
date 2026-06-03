const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

// 1. Insert migrarYSanitizarEncabezados
const migrarEncFn = `
window.migrarYSanitizarEncabezados = function(rawEncabezados) {
  if (!Array.isArray(rawEncabezados)) return window.DEFAULT_ENCABEZADOS.slice();
  if (rawEncabezados.length === 19) return rawEncabezados.slice();
  
  if (rawEncabezados.length === 18) {
    let newEnc = [];
    newEnc[0] = rawEncabezados[0];
    newEnc[1] = 'P4 Iny<br><small>Día</small>';
    for (let i = 1; i < 18; i++) {
      newEnc[i+1] = rawEncabezados[i];
    }
    return newEnc;
  }
  
  if (rawEncabezados.length === 17) {
    let newEnc = [];
    newEnc[0] = rawEncabezados[0];
    newEnc[1] = 'P4 Iny<br><small>Día</small>';
    for (let i = 1; i < 15; i++) {
      newEnc[i+1] = rawEncabezados[i];
    }
    newEnc[16] = '<div style="padding:4px; font-size:0.75rem;">IA/TE<br><small>Día</small></div>';
    newEnc[17] = rawEncabezados[15];
    newEnc[18] = rawEncabezados[16];
    return newEnc;
  }
  
  return rawEncabezados.slice();
};

window.migrarYSanitizarMatriz = function(rawMatrix) {
`;

js = js.replace('window.migrarYSanitizarMatriz = function(rawMatrix) {', migrarEncFn);

// 2. Replace the assignments
js = js.replace(
  "if (globalEncabezados) state.encabezados = globalEncabezados.slice();",
  "if (globalEncabezados) state.encabezados = window.migrarYSanitizarEncabezados(globalEncabezados);"
);

js = js.replace(
  "if (userData.encabezados) state.encabezados = userData.encabezados.slice();",
  "if (userData.encabezados) state.encabezados = window.migrarYSanitizarEncabezados(userData.encabezados);"
);

js = js.replace(
  "state.encabezados = parsed.encabezados.slice();",
  "state.encabezados = window.migrarYSanitizarEncabezados(parsed.encabezados);"
);

fs.writeFileSync('iatf-app.js', js, 'utf8');
console.log('Update completed');
