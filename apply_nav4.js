const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

// Agregar irAPestana
const irAPestanaCode = `
window.irAPestana = function(target) {
  const navBtns = document.querySelectorAll('.nav-btn, .nav-btn-bottom');
  const tabContents = document.querySelectorAll('.tab-content');
  
  navBtns.forEach(b => b.classList.remove('active'));
  tabContents.forEach(tc => tc.classList.remove('active'));
  
  const targetBtns = document.querySelectorAll(\`[data-target="\${target}"]\`);
  targetBtns.forEach(b => b.classList.add('active'));
  
  const targetEl = document.getElementById(target);
  if (targetEl) targetEl.classList.add('active');
  
  window.scrollTo(0,0);
};
`;

if (!js.includes('window.irAPestana')) {
  js = js.replace('// INITIAL STATE', irAPestanaCode + '\n// INITIAL STATE');
}

// Modificar guardarPreciosModal para usar irAPestana
const regex = /if \(document\.getElementById\('pi-check-resx1'\)\?\.checked\) \{\s*setTimeout\(\(\) => \{\s*const btn = document\.querySelector\('\.nav-btn\[data-target="resincronizacion1"\]'\);\s*if\(btn\) btn\.click\(\);\s*\}, 300\);\s*\}/g;
const repl = `if (document.getElementById('pi-check-resx1')?.checked) {
      setTimeout(() => { irAPestana('resincronizacion1'); }, 100);
    }`;

js = js.replace(regex, repl);

const regex2 = /if \(document\.getElementById\('pi-check-resx2'\)\?\.checked\) \{\s*setTimeout\(\(\) => \{\s*const btn = document\.querySelector\('\.nav-btn\[data-target="resincronizacion2"\]'\);\s*if\(btn\) btn\.click\(\);\s*\}, 300\);\s*\}/g;
const repl2 = `if (document.getElementById('pi-check-resx2')?.checked) {
      setTimeout(() => { irAPestana('resincronizacion2'); }, 100);
    }`;

js = js.replace(regex2, repl2);

fs.writeFileSync('iatf-app.js', js, 'utf8');
console.log('Listo!');
