const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex = /window\.buscarPorNit = function\(\) \{\s*const term = document\.getElementById\('search-nit'\)\.value\.trim\(\);\s*if \(\!term\) \{\s*alert\(t\("alert_enter_nit"\)\);\s*return;\s*\}\s*const historial = JSON\.parse\(localStorage\.getItem\('reprocost_historial'\)\) \|\| \[\];\s*const filtrados = historial\.filter\(r => String\(r\.nit \|\| ''\)\.includes\(term\)\);/;

const newLogic = `window.buscarPorNit = function() {
  const term = document.getElementById('search-nit').value.trim();
  if (!term) {
    alert(t("alert_enter_nit"));
    return;
  }

  // Remove spaces, dots, dashes for a clean comparison
  const termClean = term.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  
  const filtrados = historial.filter(r => {
    const nitGuardado = String(r.nit || '');
    const nitClean = nitGuardado.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return nitClean.includes(termClean) || nitGuardado.toLowerCase().includes(term.toLowerCase());
  });`;

if (js.match(regex)) {
  js = js.replace(regex, newLogic);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('buscarPorNit updated');
} else {
  console.log('Regex failed');
}
