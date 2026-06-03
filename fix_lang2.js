const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');
js = js.split("toLocaleDateString('es-ES', {month:'short', year:'numeric'})").join("toLocaleDateString((window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES')), {month:'short', year:'numeric'})");
fs.writeFileSync('iatf-app.js', js, 'utf8');
