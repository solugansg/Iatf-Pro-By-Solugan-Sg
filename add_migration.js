const fs = require('fs');
const path = 'C:\\Users\\JAN\\Documents\\App Solugan Sg\\Iatf Pro\\app.js';
let content = fs.readFileSync(path, 'utf8');

const target = `window.loadState = function() {\n  const saved = localStorage.getItem('iatfpro_state');\n  if (!saved) return;`;
const targetCRLF = `window.loadState = function() {\r\n  const saved = localStorage.getItem('iatfpro_state');\r\n  if (!saved) return;`;

const replacement = `window.loadState = function() {
  const saved = localStorage.getItem('iatfpro_state');
  
  // MIGRACIÓN ÚNICA: Forzar limpieza de caché antigua para la V 260528.5
  if (!localStorage.getItem('iatfpro_migrated_v260528_5')) {
    localStorage.removeItem('iatfpro_custom_matriz');
    if (saved) {
      try {
        const p = JSON.parse(saved);
        if (p.insumos) {
          for (let k in p.insumos) {
            p.insumos[k].def = 0;
            p.insumos[k].resx1 = 0;
            p.insumos[k].resx2 = 0;
            if (['gen','retdib','mo1','mo2','opu','dx1','dx2','iate'].includes(k)) {
              p.insumos[k].valorFrasco = 0;
            }
          }
        }
        delete p.matriz;
        localStorage.setItem('iatfpro_state', JSON.stringify(p));
      } catch(e) {}
    }
    localStorage.setItem('iatfpro_migrated_v260528_5', 'true');
    location.reload();
    return;
  }

  if (!saved) return;`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Migration added successfully (LF).");
} else if (content.includes(targetCRLF)) {
  content = content.replace(targetCRLF, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Migration added successfully (CRLF).");
} else {
  console.log("Target not found!");
}
