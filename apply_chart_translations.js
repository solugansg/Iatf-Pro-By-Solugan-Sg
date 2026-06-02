const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
const code = fs.readFileSync(file, 'utf8');
const lines = code.split('\n');

function insertDict(lines, keywordLine, newDictLines) {
  let idx = -1;
  // find the line
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(keywordLine)) {
      idx = i;
      break;
    }
  }
  if (idx !== -1) {
    // Add comma to the previous line if it doesn't have one
    if (!lines[idx].trim().endsWith(',')) {
      lines[idx] = lines[idx] + ',';
    }
    lines.splice(idx + 1, 0, ...newDictLines);
  }
}

// 1. ES
insertDict(lines, 'roi_retorno_total: "RETORNO TOTAL PROYECTADO"', [
  '    chart_pi: "Prot. Inicial",',
  '    chart_r1: "Resinc. 1",',
  '    chart_r2: "Resinc. 2",',
  '    chart_preg: "preñeces",',
  '    chart_hormones: "Hormonas",',
  '    chart_genetics: "Genética",',
  '    chart_ta: "Asistencia Técnica",',
  '    chart_iate: "Honorarios IA/TE",',
  '    chart_dx: "Dx Preñez"'
]);

// 2. EN
insertDict(lines, 'roi_retorno_total: "TOTAL PROJECTED RETURN"', [
  '    chart_pi: "Initial Prot.",',
  '    chart_r1: "Resync. 1",',
  '    chart_r2: "Resync. 2",',
  '    chart_preg: "pregnancies",',
  '    chart_hormones: "Hormones",',
  '    chart_genetics: "Genetics",',
  '    chart_ta: "Technical Assistance",',
  '    chart_iate: "AI/ET Fees",',
  '    chart_dx: "Pregnancy Dx"'
]);

// 3. PT
insertDict(lines, 'roi_retorno_total: "RETORNO TOTAL PROJETADO"', [
  '    chart_pi: "Prot. Inicial",',
  '    chart_r1: "Ressinc. 1",',
  '    chart_r2: "Ressinc. 2",',
  '    chart_preg: "prenhezes",',
  '    chart_hormones: "Hormônios",',
  '    chart_genetics: "Genética",',
  '    chart_ta: "Assistência Técnica",',
  '    chart_iate: "Honorários IA/TE",',
  '    chart_dx: "Dx Prenhez"'
]);

let updatedCode = lines.join('\n');

// 4. Update the charts code
updatedCode = updatedCode.replace(
  "labels: ['Prot. Inicial', 'Resinc. 1', 'Resinc. 2'].filter",
  "labels: [t('chart_pi'), t('chart_r1'), t('chart_r2')].filter"
).replace(
  "label: 'Preñeces',",
  "label: t('chart_preg'),"
).replace(
  "return `${val} preñeces (${porc}%)`;",
  "return `${val} ${t('chart_preg')} (${porc}%)`;"
).replace(
  "{ lbl: 'Hormonas', val: cHormonas, col: '#ef4444' },",
  "{ lbl: t('chart_hormones'), val: cHormonas, col: '#ef4444' },"
).replace(
  "{ lbl: 'Genética', val: cGenetica, col: '#f59e0b' },",
  "{ lbl: t('chart_genetics'), val: cGenetica, col: '#f59e0b' },"
).replace(
  "{ lbl: 'Asistencia Técnica', val: cAsistencia, col: '#a855f7' },",
  "{ lbl: t('chart_ta'), val: cAsistencia, col: '#a855f7' },"
).replace(
  "{ lbl: 'Honorarios IA/TE', val: cIate, col: '#ec4899' },",
  "{ lbl: t('chart_iate'), val: cIate, col: '#ec4899' },"
).replace(
  "{ lbl: 'Dx Preñez', val: cDiagnostico, col: '#0ea5e9' }",
  "{ lbl: t('chart_dx'), val: cDiagnostico, col: '#0ea5e9' }"
);

fs.writeFileSync(file, updatedCode, 'utf8');
console.log('Chart update complete');
