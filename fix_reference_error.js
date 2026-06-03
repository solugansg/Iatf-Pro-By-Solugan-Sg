const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex1 = /gComp \+= comp; gAplic \+= aplic; gTotalPorVaca \+= costoDosis;/g;
js = js.replace(regex1, 'gTotalPorVaca += costoDosis;');

fs.writeFileSync('iatf-app.js', js, 'utf8');
console.log('Fixed ReferenceError in ejecutarResx1 and ejecutarResx2');
