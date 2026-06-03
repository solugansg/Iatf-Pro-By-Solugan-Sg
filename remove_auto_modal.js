const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex1 = /setTimeout\(\(\) => abrirModalPrecios\('resx1'\), 100\);/g;
if(regex1.test(js)) {
  js = js.replace(regex1, '');
  console.log('Removido resx1 auto-open modal');
}

const regex2 = /setTimeout\(\(\) => abrirModalPrecios\('resx2'\), 100\);/g;
if(regex2.test(js)) {
  js = js.replace(regex2, '');
  console.log('Removido resx2 auto-open modal');
}

fs.writeFileSync('iatf-app.js', js, 'utf8');
