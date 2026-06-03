const fs = require('fs');

let code = fs.readFileSync('iatf-app.js', 'utf8');

const newHeaders = [
  'DISPOSITIVO INTRAVAGINAL BOVINO (P4)',
  'PROGESTERONA INYECTABLE',
  'BENZOATO DE ESTRADIOL (BE) 1A DOSIS',
  'BENZOATO DE ESTRADIOL (BE) 2A DOSIS',
  'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 1A DOSIS',
  'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 2A DOSIS',
  'PROSTAGLANDINA (PGF2@) 1A DOSIS',
  'PROSTAGLANDINA (PGF2@) 2A DOSIS',
  'PROSTAGLANDINA (PGF2@) 3A DOSIS',
  'GONADOTROPINA CORIÓNICA EQUINA (ECG)',
  'CIPIONATO DE ESTRADIOL (C.E)',
  'GENÉTICA (SEMEN / EMBRIÓN)',
  'RETIRO DIB',
  'ASISTENCIA TÉCNICA 1',
  'ASISTENCIA TÉCNICA 2',
  'IA/TE',
  'ASPIRACIÓN FOLICULAR (OPU)',
  'CONFIRMACIÓN PREÑEZ DX1',
  'CONFIRMACIÓN PREÑEZ DX2'
];

// Update DEFAULT_ENCABEZADOS
code = code.replace(
  /window\.DEFAULT_ENCABEZADOS\s*=\s*\[.*?\];/s,
  `window.DEFAULT_ENCABEZADOS = ${JSON.stringify(newHeaders)};`
);

const tHeaderFn = `
window.tHeader = function(val) {
  if (!val) return val;
  const currentLang = window.currentLang || 'es';
  if (currentLang === 'es') return val;

  const mapEn = {
    'PROTOCOLOS / HORMONAS': 'PROTOCOLS / HORMONES',
    'DISPOSITIVO INTRAVAGINAL BOVINO (P4)': 'BOVINE INTRAVAGINAL DEVICE (P4)',
    'PROGESTERONA INYECTABLE': 'INJECTABLE PROGESTERONE',
    'BENZOATO DE ESTRADIOL (BE) 1A DOSIS': 'ESTRADIOL BENZOATE (EB) 1ST DOSE',
    'BENZOATO DE ESTRADIOL (BE) 2A DOSIS': 'ESTRADIOL BENZOATE (EB) 2ND DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 1A DOSIS': 'GONADOTROPIN RELEASING HORMONE (GNRH) 1ST DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 2A DOSIS': 'GONADOTROPIN RELEASING HORMONE (GNRH) 2ND DOSE',
    'PROSTAGLANDINA (PGF2@) 1A DOSIS': 'PROSTAGLANDIN (PGF2@) 1ST DOSE',
    'PROSTAGLANDINA (PGF2@) 2A DOSIS': 'PROSTAGLANDIN (PGF2@) 2ND DOSE',
    'PROSTAGLANDINA (PGF2@) 3A DOSIS': 'PROSTAGLANDIN (PGF2@) 3RD DOSE',
    'GONADOTROPINA CORIÓNICA EQUINA (ECG)': 'EQUINE CHORIONIC GONADOTROPIN (ECG)',
    'CIPIONATO DE ESTRADIOL (C.E)': 'ESTRADIOL CYPIONATE (E.C)',
    'GENÉTICA (SEMEN / EMBRIÓN)': 'GENETICS (SEMEN / EMBRYO)',
    'RETIRO DIB': 'DIB WITHDRAWAL',
    'ASISTENCIA TÉCNICA 1': 'TECHNICAL ASSISTANCE 1',
    'ASISTENCIA TÉCNICA 2': 'TECHNICAL ASSISTANCE 2',
    'IA/TE': 'AI/ET',
    'ASPIRACIÓN FOLICULAR (OPU)': 'FOLLICULAR ASPIRATION (OPU)',
    'CONFIRMACIÓN PREÑEZ DX1': 'PREGNANCY CONFIRMATION DX1',
    'CONFIRMACIÓN PREÑEZ DX2': 'PREGNANCY CONFIRMATION DX2'
  };

  const mapPt = {
    'PROTOCOLOS / HORMONAS': 'PROTOCOLOS / HORMÔNIOS',
    'DISPOSITIVO INTRAVAGINAL BOVINO (P4)': 'DISPOSITIVO INTRAVAGINAL BOVINO (P4)',
    'PROGESTERONA INYECTABLE': 'PROGESTERONA INJETÁVEL',
    'BENZOATO DE ESTRADIOL (BE) 1A DOSIS': 'BENZOATO DE ESTRADIOL (BE) 1ª DOSE',
    'BENZOATO DE ESTRADIOL (BE) 2A DOSIS': 'BENZOATO DE ESTRADIOL (BE) 2ª DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 1A DOSIS': 'HORMÔNIO LIBERADOR DE GONADOTROFINA (GNRH) 1ª DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 2A DOSIS': 'HORMÔNIO LIBERADOR DE GONADOTROFINA (GNRH) 2ª DOSE',
    'PROSTAGLANDINA (PGF2@) 1A DOSIS': 'PROSTAGLANDINA (PGF2@) 1ª DOSE',
    'PROSTAGLANDINA (PGF2@) 2A DOSIS': 'PROSTAGLANDINA (PGF2@) 2ª DOSE',
    'PROSTAGLANDINA (PGF2@) 3A DOSIS': 'PROSTAGLANDINA (PGF2@) 3ª DOSE',
    'GONADOTROPINA CORIÓNICA EQUINA (ECG)': 'GONADOTROFINA CORIÔNICA EQUINA (ECG)',
    'CIPIONATO DE ESTRADIOL (C.E)': 'CIPIONATO DE ESTRADIOL (C.E)',
    'GENÉTICA (SEMEN / EMBRIÓN)': 'GENÉTICA (SÊMEN / EMBRIÃO)',
    'RETIRO DIB': 'RETIRADA DIB',
    'ASISTENCIA TÉCNICA 1': 'ASSISTÊNCIA TÉCNICA 1',
    'ASISTENCIA TÉCNICA 2': 'ASSISTÊNCIA TÉCNICA 2',
    'IA/TE': 'IA/TE',
    'ASPIRACIÓN FOLICULAR (OPU)': 'ASPIRAÇÃO FOLICULAR (OPU)',
    'CONFIRMACIÓN PREÑEZ DX1': 'CONFIRMAÇÃO DE PRENHEZ DX1',
    'CONFIRMACIÓN PREÑEZ DX2': 'CONFIRMAÇÃO DE PRENHEZ DX2'
  };

  if (currentLang === 'en') return mapEn[val] || val;
  if (currentLang === 'pt') return mapPt[val] || val;
  return val;
};
`;

if (!code.includes('window.tHeader = function')) {
  // If window.translations exists, put it before. Otherwise just append.
  if (code.includes('window.translations = {')) {
    code = code.replace('window.translations = {', tHeaderFn + '\\nwindow.translations = {');
  } else {
    code += "\\n" + tHeaderFn;
  }
}

// Update renderEncabezados
const searchTrHead1 = 'trHead.innerHTML = `\\n    <th style="text-align: left; background: #0f172a;">Protocolos / Hormonas</th>\\n  `;';
const replaceTrHead1 = 'trHead.innerHTML = `\\n    <th style="text-align: left; background: #0f172a; font-size: 90%; font-weight: 500;">${window.tHeader ? window.tHeader(\\'PROTOCOLOS / HORMONAS\\') : \\'PROTOCOLOS / HORMONAS\\'}</th>\\n  `;';

code = code.replace(searchTrHead1, replaceTrHead1);
code = code.replace(
  'trHead.innerHTML = `\\n    <th style="text-align: left; background: #0f172a;">Protocolos / Hormonas</th>\\n  `;',
  'trHead.innerHTML = `\\n    <th style="text-align: left; background: #0f172a; font-size: 90%; font-weight: 500;">${window.tHeader ? window.tHeader(\'PROTOCOLOS / HORMONAS\') : \'PROTOCOLOS / HORMONAS\'}</th>\\n  `;'
); // In case the newline matching fails, try exact string

const searchTrHead2 = 'trHead.innerHTML += `<th>${enc}</th>`;';
const replaceTrHead2 = 'trHead.innerHTML += `<th style="font-size: 90%; font-weight: 500;">${window.tHeader ? window.tHeader(enc) : enc}</th>`;';

code = code.replace(searchTrHead2, replaceTrHead2);

// Let's also enforce it in case of exact match issues
code = code.replace('<th>${enc}</th>', '<th style="font-size: 90%; font-weight: 500;">${window.tHeader ? window.tHeader(enc) : enc}</th>');
code = code.replace('<th style="text-align: left; background: #0f172a;">Protocolos / Hormonas</th>', '<th style="text-align: left; background: #0f172a; font-size: 90%; font-weight: 500;">${window.tHeader ? window.tHeader(\'PROTOCOLOS / HORMONAS\') : \'PROTOCOLOS / HORMONAS\'}</th>');

// Reset saved headers on load to force the new defaults
code = code.replace(
  "if (userData.encabezados) state.encabezados = window.migrarYSanitizarEncabezados(userData.encabezados);",
  "if (userData.encabezados) { state.encabezados = window.DEFAULT_ENCABEZADOS.slice(); }"
);
code = code.replace(
  "if (globalEncabezados) state.encabezados = window.migrarYSanitizarEncabezados(globalEncabezados);",
  "if (globalEncabezados) { state.encabezados = window.DEFAULT_ENCABEZADOS.slice(); }"
);
code = code.replace(
  "state.encabezados = window.migrarYSanitizarEncabezados(parsed.encabezados);",
  "state.encabezados = window.DEFAULT_ENCABEZADOS.slice();"
);

fs.writeFileSync('iatf-app.js', code, 'utf8');
console.log('Update applied');
