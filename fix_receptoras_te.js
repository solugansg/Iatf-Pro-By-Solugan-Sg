const fs = require('fs');
let code = fs.readFileSync('iatf-app.js', 'utf8');

// Update mapEn
code = code.replace(
  /'Receptoras 1 \(IATF\)': 'Recipients 1 \(FTAI\)',/g,
  "'Receptoras 1 (IATF)': 'Recipients 1 (FTAI)',\n    'Receptoras 1 (Te)': 'Recipients 1 (ET)',\n    'Receptoras 2 (Te)': 'Recipients 2 (ET)',"
);

// Update mapPt
code = code.replace(
  /'Receptoras 1 \(IATF\)': 'Receptoras 1 \(IATF\)',/g,
  "'Receptoras 1 (IATF)': 'Receptoras 1 (IATF)',\n    'Receptoras 1 (Te)': 'Receptoras 1 (TE)',\n    'Receptoras 2 (Te)': 'Receptoras 2 (TE)',"
);

fs.writeFileSync('iatf-app.js', code, 'utf8');
console.log('Te translations updated.');
