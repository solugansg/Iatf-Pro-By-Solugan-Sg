const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');
js = js.split("lblF2.innerText = fBase.toLocaleDateString('es-ES'").join("lblF2.innerText = fBase.toLocaleDateString(langCode");
fs.writeFileSync('iatf-app.js', js, 'utf8');
