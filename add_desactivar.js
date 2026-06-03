const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const desactivarCode = `
window.desactivarFase = function(faseId) {
  if (faseId === 'resincronizacion1') {
    const cb = document.getElementById('pi-check-resx1');
    if(cb) {
      cb.checked = false;
      window.toggleFase('resincronizacion1', false);
    }
    window.irAPestana('protocolo-inicial');
  } else if (faseId === 'resincronizacion2') {
    const cb = document.getElementById('pi-check-resx2');
    if(cb) {
      cb.checked = false;
      window.toggleFase('resincronizacion2', false);
    }
    window.irAPestana('protocolo-inicial');
  }
};
`;

if (!js.includes('window.desactivarFase')) {
  js += desactivarCode;
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('desactivarFase added');
} else {
  console.log('desactivarFase already exists');
}
