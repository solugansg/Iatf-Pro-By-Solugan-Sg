const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const ptIdx = js.indexOf('pt: {');
if (ptIdx !== -1) {
  // Finding the second `btn_hide_p: "Ocultar Protocolos",` which comes after the first one
  const firstHide = js.indexOf('btn_hide_p:', ptIdx);
  const secondHide = js.indexOf('btn_hide_p:', firstHide + 10);
  
  if (secondHide !== -1) {
    const nextLineBreak = js.indexOf('\n', secondHide);
    // Remove the duplicated btn_hide_p completely
    js = js.substring(0, secondHide) + js.substring(nextLineBreak + 1);
  }
}

fs.writeFileSync('iatf-app.js', js, 'utf8');
