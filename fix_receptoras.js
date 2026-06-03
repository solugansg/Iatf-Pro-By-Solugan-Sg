const fs = require('fs');
let code = fs.readFileSync('iatf-app.js', 'utf8');

// Update mapEn
code = code.replace(
  /'Receptoras 2 \(IATF\)': 'Recipients 2 \(FTAI\)',/g,
  "'Receptoras 2 (IATF)': 'Recipients 2 (FTAI)',\n    'Receptoras': 'Recipients',\n    'receptoras': 'recipients',"
);

// Update mapPt
code = code.replace(
  /'Receptoras 2 \(IATF\)': 'Receptoras 2 \(IATF\)',/g,
  "'Receptoras 2 (IATF)': 'Receptoras 2 (IATF)',\n    'Receptoras': 'Receptoras',\n    'receptoras': 'receptoras',"
);

// Update translations
code = code.replace(
  /btn_pdf: "PDF",/g,
  (match, offset, fullCode) => {
    // If it's the ES translation (around index 1000-2000 typically)
    const subStr = fullCode.substring(0, offset);
    if (subStr.includes('es: {') && !subStr.includes('en: {')) {
      return match + '\n    evento_te: "EVENTO: TRANSFERENCIA DE EMBRIONES",';
    }
    if (subStr.includes('en: {') && !subStr.includes('pt: {')) {
      return match + '\n    evento_te: "EVENT: EMBRYO TRANSFER",';
    }
    if (subStr.includes('pt: {')) {
      return match + '\n    evento_te: "EVENTO: TRANSFERÊNCIA DE EMBRIÕES",';
    }
    return match;
  }
);

code = code.replace(/'EVENTO: TRANSFERENCIA DE EMBRIONES'/g, "t('evento_te')");

fs.writeFileSync('iatf-app.js', code, 'utf8');
console.log('Translations updated.');
