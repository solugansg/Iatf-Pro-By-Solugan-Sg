const fs = require('fs');

let code = fs.readFileSync('iatf-app.js', 'utf8');

const deletedCode = `  const elIngC = document.getElementById('tc-ingreso-carne');
  if (elPromC) elPromC.innerText = promCarne.toFixed(2);
  if (elIngC) elIngC.innerText = formatter.format(ingresoCarne);
}

window.limpiarModuloLeche = function() {
  document.getElementById('tc-precio-leche').value = 0;
  document.getElementById('tc-duracion-lactancia').value = 0;
  document.getElementById('tc-litros-lactancia').value = 0;
  calcTableroControl();
  saveState();
  if (typeof updateResultados === 'function') updateResultados();
}

window.limpiarModuloCarne = function() {
  document.getElementById('tc-precio-carne').value = 0;
  document.getElementById('tc-duracion-carne').value = 0;
  document.getElementById('tc-peso-destete').value = 0;
  calcTableroControl();
  saveState();
  if (typeof updateResultados === 'function') updateResultados();
}

// 2. MATRIZ
let isMatrixUnlocked = false;

function renderEncabezados() {
  const trHead = document.getElementById('tc-matriz-header-row');
  if (!trHead) return;
  // Limpiar encabezados existentes dinámicos manteniendo los estáticos (el primero y los dos últimos)
  trHead.innerHTML = \`
    <th style="text-align: left; background: #0f172a; font-size: 90%; font-weight: 500;">\${window.tHeader ? window.tHeader('PROTOCOLOS / HORMONAS') : 'PROTOCOLOS / HORMONAS'}</th>
  \`;
  
  // Agregar encabezados dinámicos
  if (state.encabezados && state.encabezados.length > 0) {
    state.encabezados.forEach(enc => {`;

const searchString = `  const elPromC = document.getElementById('tc-promedio-carne');
      trHead.innerHTML += \`<th>\${enc}</th>\`;`;

code = code.replace(searchString, `  const elPromC = document.getElementById('tc-promedio-carne');\n` + deletedCode + `\n      trHead.innerHTML += \`<th style="font-size: 90%; font-weight: 500;">\${window.tHeader ? window.tHeader(enc) : enc}</th>\`;`);

// Also update the fallback columns
code = code.replace(
  `trHead.innerHTML += \`<th>Col \${i+1}</th>\`;`,
  `trHead.innerHTML += \`<th style="font-size: 90%; font-weight: 500;">Col \${i+1}</th>\`;`
);

fs.writeFileSync('iatf-app.js', code, 'utf8');
console.log('Fixed');
