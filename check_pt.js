const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('iatf-app.js', 'utf8');

// Extraer todas las keys de index.html
const regex = /data-i18n="([^"]+)"/g;
const keysInHtml = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  keysInHtml.add(match[1]);
}

// Extraer el bloque pt
const ptStart = js.indexOf('pt: {');
const ptEnd = js.indexOf('}', ptStart + 2000);
const ptBlock = js.substring(ptStart, ptEnd);

// Encontrar qué keys no están en ptBlock
const missingKeys = [];
for (const key of keysInHtml) {
  if (!ptBlock.includes(key + ':')) {
    missingKeys.push(key);
  }
}

console.log('Keys missing in PT:', missingKeys);
