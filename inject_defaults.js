const fs = require('fs');
const path = require('path');
const jsPath = path.resolve(__dirname, 'app_v42.js');
const userConfig = require('./user_config.json');

let js = fs.readFileSync(jsPath, 'utf8');

// Modificar default state (state inicial)
// 1. Modificar default insumos
let insumosStr = JSON.stringify(userConfig.insumos, null, 2);
const defaultInsumosRegex = /insumos:\s*\{[\s\S]*?\},?\s*colDefs/m;
js = js.replace(defaultInsumosRegex, `insumos: ${insumosStr}, colDefs`);

// 2. Modificar DEFAULT_MATRIZ (al principio del archivo)
let matrizStr = JSON.stringify(userConfig.matriz, null, 0);
const defaultMatrizRegex = /window\.DEFAULT_MATRIZ\s*=\s*\[[\s\S]*?\];/;
js = js.replace(defaultMatrizRegex, `window.DEFAULT_MATRIZ = ${matrizStr};`);

// 3. Opcional: modificar tableroLeche y tableroCarne default si lo requiere
let lecheStr = JSON.stringify(userConfig.tableroLeche, null, 0);
let carneStr = JSON.stringify(userConfig.tableroCarne, null, 0);
js = js.replace(/tableroLeche:\s*\{[\s\S]*?\},/, `tableroLeche: ${lecheStr},`);
js = js.replace(/tableroCarne:\s*\{[\s\S]*?\},/, `tableroCarne: ${carneStr},`);

fs.writeFileSync(jsPath, js, 'utf8');
console.log('Injected user configuration as defaults into app_v42.js');
