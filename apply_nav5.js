const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex1 = /setTimeout\(\(\) => \{ irAPestana\('resincronizacion1'\); \}, 100\);/g;
js = js.replace(regex1, "setTimeout(() => { irAPestana('resincronizacion1'); ejecutarResx1(); lucide.createIcons(); }, 100);");

const regex2 = /setTimeout\(\(\) => \{ irAPestana\('resincronizacion2'\); \}, 100\);/g;
js = js.replace(regex2, "setTimeout(() => { irAPestana('resincronizacion2'); ejecutarResx2(); lucide.createIcons(); }, 100);");

fs.writeFileSync('iatf-app.js', js, 'utf8');
console.log('Update done');
