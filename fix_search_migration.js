const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex = /window\.buscarPorNit = function\(\) \{\s*const term = document\.getElementById\('search-nit'\)\.value\.trim\(\);\s*if \(\!term\) \{\s*alert\(t\("alert_enter_nit"\)\);\s*return;\s*\}\s*\/\/ Remove spaces, dots, dashes for a clean comparison\s*const termClean = term\.replace\(\/\[\^a-zA-Z0-9\]\/g, ''\)\.toLowerCase\(\);\s*const historial = JSON\.parse\(localStorage\.getItem\('reprocost_historial'\)\) \|\| \[\];\s*const filtrados = historial\.filter\(r => \{\s*const nitGuardado = String\(r\.nit \|\| ''\);\s*const nitClean = nitGuardado\.replace\(\/\[\^a-zA-Z0-9\]\/g, ''\)\.toLowerCase\(\);\s*return nitClean\.includes\(termClean\) \|\| nitGuardado\.toLowerCase\(\)\.includes\(term\.toLowerCase\(\)\);\s*\}\);/;

const newLogic = `window.buscarPorNit = function() {
  const term = document.getElementById('search-nit').value.trim();
  if (!term) {
    alert(t("alert_enter_nit"));
    return;
  }

  // Remove spaces, dots, dashes for a clean comparison
  const termClean = term.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  
  // MIGRACIÓN AUTOMÁTICA: Si hay reportes con N/A, asignarles el NIT del usuario actual
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  if (perfil.nit) {
    let changed = false;
    historial.forEach(r => {
      if (!r.nit || r.nit === 'N/A') {
        r.nit = perfil.nit;
        changed = true;
      }
    });
    if (changed) {
      localStorage.setItem('reprocost_historial', JSON.stringify(historial));
    }
  }

  const filtrados = historial.filter(r => {
    const nitGuardado = String(r.nit || '');
    const nitClean = nitGuardado.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Buscar también por finca o fecha para que sea más útil
    const fincaClean = String(r.finca || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const fechaClean = String(r.fecha || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return nitClean.includes(termClean) || 
           nitGuardado.toLowerCase().includes(term.toLowerCase()) ||
           fincaClean.includes(termClean) ||
           String(r.finca || '').toLowerCase().includes(term.toLowerCase()) ||
           String(r.fecha || '').toLowerCase().includes(term.toLowerCase());
  });`;

if (js.match(regex)) {
  js = js.replace(regex, newLogic);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('buscarPorNit updated with migration');
} else {
  console.log('Regex failed');
}
