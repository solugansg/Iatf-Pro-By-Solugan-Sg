const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex = /window\.guardarEnHistorial = function\(\) \{\s*const ubicacion = document\.getElementById\('pi-ubicacion'\)\.value\.trim\(\);\s*const finca = document\.getElementById\('pi-finca'\)\.value\.trim\(\);\s*const perfilStr = localStorage\.getItem\('reprocost_perfil'\);\s*let nitValue = perfilStr \? \(JSON\.parse\(perfilStr\)\.nit \|\| 'N\/A'\) : 'N\/A';\s*if \(nitValue === 'N\/A'\) \{/;

const newLogic = `window.guardarEnHistorial = function() {
  const ubicacion = document.getElementById('pi-ubicacion').value.trim();
  const finca = document.getElementById('pi-finca').value.trim();
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  let nitValue = perfil.nit || 'N/A';
  if (nitValue === 'N/A') {`;

if (js.match(regex)) {
  js = js.replace(regex, newLogic);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('guardarEnHistorial updated');
} else {
  console.log('Regex failed');
}
