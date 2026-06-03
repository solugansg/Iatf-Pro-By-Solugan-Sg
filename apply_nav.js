const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const targetStr = `  cerrarModalPrecios(); 
  saveState(); 
  if (modalContext === 'pi') { ejecutarProtocoloInicial(); renderMatriz(); }
  else if (modalContext === 'resx1') { ejecutarResx1(); }
  else if (modalContext === 'resx2') { ejecutarResx2(); }
  
  updateResultados();`;

const replacement = `  cerrarModalPrecios(); 
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

if(js.includes(targetStr)) {
  js = js.replace(targetStr, replacement);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('Exito');
} else {
  console.log('No encontrado');
}
