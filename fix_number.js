const fs = require('fs');
const path = require('path');
const jsPath = path.resolve(__dirname, 'app_master.js');

let js = fs.readFileSync(jsPath, 'utf8');

const targetPrice = `window.getInsumoPrice = function(ins, context) {
  if (context === 'resx1') {
    if (ins.valorFrascoResx1 === undefined || ins.valorFrascoResx1 === null || ins.valorFrascoResx1 === 0) return ins.valorFrasco || 0;
    return ins.valorFrascoResx1;
  }
  if (context === 'resx2') {
    if (ins.valorFrascoResx2 === undefined || ins.valorFrascoResx2 === null || ins.valorFrascoResx2 === 0) return ins.valorFrasco || 0;
    return ins.valorFrascoResx2;
  }
  return ins.valorFrasco || 0;
};`;
const targetPriceCRLF = targetPrice.replace(/\n/g, '\r\n');

const newPrice = `window.getInsumoPrice = function(ins, context) {
  if (context === 'resx1') {
    if (ins.valorFrascoResx1 === undefined || ins.valorFrascoResx1 === null || Number(ins.valorFrascoResx1) === 0) return ins.valorFrasco || 0;
    return ins.valorFrascoResx1;
  }
  if (context === 'resx2') {
    if (ins.valorFrascoResx2 === undefined || ins.valorFrascoResx2 === null || Number(ins.valorFrascoResx2) === 0) return ins.valorFrasco || 0;
    return ins.valorFrascoResx2;
  }
  return ins.valorFrasco || 0;
};`;

if (js.includes(targetPrice)) {
  js = js.replace(targetPrice, newPrice);
} else if (js.includes(targetPriceCRLF)) {
  js = js.replace(targetPriceCRLF, newPrice);
}

const targetTamano = `window.getInsumoTamano = function(ins, context) {
  if (context === 'resx1') {
    if (ins.tamanoResx1 === undefined || ins.tamanoResx1 === null || ins.tamanoResx1 === 0) return ins.tamano || 1;
    return ins.tamanoResx1;
  }
  if (context === 'resx2') {
    if (ins.tamanoResx2 === undefined || ins.tamanoResx2 === null || ins.tamanoResx2 === 0) return ins.tamano || 1;
    return ins.tamanoResx2;
  }
  return ins.tamano || 1;
};`;
const targetTamanoCRLF = targetTamano.replace(/\n/g, '\r\n');

const newTamano = `window.getInsumoTamano = function(ins, context) {
  if (context === 'resx1') {
    if (ins.tamanoResx1 === undefined || ins.tamanoResx1 === null || Number(ins.tamanoResx1) === 0) return ins.tamano || 1;
    return ins.tamanoResx1;
  }
  if (context === 'resx2') {
    if (ins.tamanoResx2 === undefined || ins.tamanoResx2 === null || Number(ins.tamanoResx2) === 0) return ins.tamano || 1;
    return ins.tamanoResx2;
  }
  return ins.tamano || 1;
};`;

if (js.includes(targetTamano)) {
  js = js.replace(targetTamano, newTamano);
} else if (js.includes(targetTamanoCRLF)) {
  js = js.replace(targetTamanoCRLF, newTamano);
}

fs.writeFileSync(jsPath, js, 'utf8');
console.log('Fixed Number conversion');
