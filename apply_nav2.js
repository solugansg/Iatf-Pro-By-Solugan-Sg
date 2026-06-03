const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex = /cerrarModalPrecios\(\); \s*saveState\(\); \s*if \(modalContext === 'pi'\) { ejecutarProtocoloInicial\(\); renderMatriz\(\); }\s*else if \(modalContext === 'resx1'\) { ejecutarResx1\(\); }\s*else if \(modalContext === 'resx2'\) { ejecutarResx2\(\); }\s*updateResultados\(\);/;

const replacement = `cerrarModalPrecios(); 
  saveState(); 
  
  if (modalContext === 'pi') { 
    ejecutarProtocoloInicial(); 
    renderMatriz(); 
    if (document.getElementById('pi-check-resx1')?.checked) {
      setTimeout(() => {
        const btn = document.querySelector('.nav-btn[data-target="resincronizacion1"]');
        if(btn) btn.click();
      }, 300);
    }
  }
  else if (modalContext === 'resx1') { 
    ejecutarResx1(); 
    if (document.getElementById('pi-check-resx2')?.checked) {
      setTimeout(() => {
        const btn = document.querySelector('.nav-btn[data-target="resincronizacion2"]');
        if(btn) btn.click();
      }, 300);
    }
  }
  else if (modalContext === 'resx2') { 
    ejecutarResx2(); 
  }
  
  updateResultados();`;

if(regex.test(js)) {
  js = js.replace(regex, replacement);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('Exito');
} else {
  console.log('No encontrado');
}
