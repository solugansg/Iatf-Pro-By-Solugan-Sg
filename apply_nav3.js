const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

const regex = /if \(document\.getElementById\('pi-check-resx1'\)\?\.checked\) \{\s*setTimeout\(\(\) => \{\s*const btn = document\.querySelector\('\.nav-btn\[data-target="resincronizacion1"\]'\);\s*if\(btn\) btn\.click\(\);\s*\}, 300\);\s*\}/g;

const replacement = `if (document.getElementById('pi-check-resx1')?.checked) {
      setTimeout(() => {
        const btn = document.querySelector('.nav-btn[data-target="resincronizacion1"]');
        if(btn) btn.click();
        setTimeout(() => abrirModalPrecios('resx1'), 100);
      }, 300);
    }`;

if(regex.test(js)) {
  js = js.replace(regex, replacement);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('Exito resx1');
} else {
  console.log('No encontrado resx1');
}

const regex2 = /if \(document\.getElementById\('pi-check-resx2'\)\?\.checked\) \{\s*setTimeout\(\(\) => \{\s*const btn = document\.querySelector\('\.nav-btn\[data-target="resincronizacion2"\]'\);\s*if\(btn\) btn\.click\(\);\s*\}, 300\);\s*\}/g;

const replacement2 = `if (document.getElementById('pi-check-resx2')?.checked) {
      setTimeout(() => {
        const btn = document.querySelector('.nav-btn[data-target="resincronizacion2"]');
        if(btn) btn.click();
        setTimeout(() => abrirModalPrecios('resx2'), 100);
      }, 300);
    }`;

if(regex2.test(js)) {
  js = js.replace(regex2, replacement2);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('Exito resx2');
} else {
  console.log('No encontrado resx2');
}
