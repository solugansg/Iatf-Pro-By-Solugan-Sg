const fs = require('fs');
let code = fs.readFileSync('iatf-app.js', 'utf8');

const regex = /\}<\/th>`;\s*\}\);\s*\} else \{\s*\/\/ Fallback if empty \(should never happen if default is loaded\)\s*for \(let i = 0; i < state\.colDefs\.length; i\+\+\) \{\s*trHead\.innerHTML \+= `<th>Col \$\{i\+1\}<\/th>`;\s*\}\s*\}\s*\/\/ Agregar columnas finales fijas\s*trHead\.innerHTML \+= `\s*<th style="padding: 4px; font-size: 0\.75rem; min-width: 280px;">Observaciones<\/th>\s*<th id="th-acciones" style="display: none; background: #ef4444; color:#fff;">Acciones<\/th>\s*`;\s*\}/g;

code = code.replace(regex, "");

fs.writeFileSync('iatf-app.js', code, 'utf8');
console.log('Regex cleanup applied');
