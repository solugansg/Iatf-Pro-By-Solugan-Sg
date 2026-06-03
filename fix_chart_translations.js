const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');
const lines = code.split('\n');

function insertDict(lines, keywordLine, newDictLines) {
  let idx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(keywordLine)) {
      idx = i;
      break;
    }
  }
  if (idx !== -1) {
    if (!lines[idx].trim().endsWith(',')) {
      lines[idx] = lines[idx] + ',';
    }
    lines.splice(idx + 1, 0, ...newDictLines);
  }
}

// 1. ES
insertDict(lines, 'roi_retorno_total: "RETORNO TOTAL PROYECTADO"', [
  '    chart_ingreso_neto: "Ingreso Neto",',
  '    chart_inversion_total: "Inversión Total",',
  '    chart_bruto: "Bruto",',
  '    chart_bruto_upper: "BRUTO",',
  '    chart_inv: "Inv.",',
  '    chart_neto: "Neto"'
]);

// 2. EN
insertDict(lines, 'roi_retorno_total: "TOTAL PROJECTED RETURN"', [
  '    chart_ingreso_neto: "Net Income",',
  '    chart_inversion_total: "Total Investment",',
  '    chart_bruto: "Gross",',
  '    chart_bruto_upper: "GROSS",',
  '    chart_inv: "Inv.",',
  '    chart_neto: "Net"'
]);

// 3. PT
insertDict(lines, 'roi_retorno_total: "RETORNO TOTAL PROJETADO"', [
  '    chart_ingreso_neto: "Receita Líquida",',
  '    chart_inversion_total: "Investimento Total",',
  '    chart_bruto: "Bruto",',
  '    chart_bruto_upper: "BRUTO",',
  '    chart_inv: "Inv.",',
  '    chart_neto: "Líquido"'
]);

let updatedCode = lines.join('\n');

// 4. Update the charts code
updatedCode = updatedCode.replace(
  "labels: ['Ingreso Neto', 'Inversión Total'],",
  "labels: [t('chart_ingreso_neto'), t('chart_inversion_total')],"
).replace(
  "ctx.fillText('BRUTO', centerX, centerY - 15);",
  "ctx.fillText(t('chart_bruto_upper'), centerX, centerY - 15);"
).replace(
  "labels: ['Bruto', 'Inv.', 'Neto'],",
  "labels: [t('chart_bruto'), t('chart_inv'), t('chart_neto')],"
);

fs.writeFileSync(file, updatedCode, 'utf8');
console.log('Chart translations updated.');
