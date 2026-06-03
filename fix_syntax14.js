const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

const startStr = 'lucide.createIcons();';
const endStr = "document.addEventListener('DOMContentLoaded', () => {";

const idx1 = code.lastIndexOf(startStr);
const idx2 = code.indexOf(endStr, idx1);

if (idx1 !== -1 && idx2 !== -1) {
  const badPart = code.substring(idx1 + startStr.length, idx2);
  console.log('Bad part was:', JSON.stringify(badPart));
  
  // Replace the bad part with clean newlines and the comment
  const cleanPart = '\\n};\\n\\n// Ejecutar al cargar si no es español\\n';
  
  code = code.substring(0, idx1 + startStr.length) + cleanPart + code.substring(idx2);
  fs.writeFileSync(file, code, 'utf8');
  console.log('Fixed block');
} else {
  console.log('Could not find bounds');
}
