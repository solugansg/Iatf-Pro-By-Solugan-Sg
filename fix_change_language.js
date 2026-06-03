const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// The multi_replace_file_content tool mangled the file by deleting window.t function and window.currentLang.
// First, let's restore those lines if they are missing.

const missingCode = `
// Helper de traducción - FUNCIÓN CRÍTICA
window.t = function(key) {
  const lang = window.currentLang || 'es';
  return (window.translations[lang] && window.translations[lang][key]) 
    ? window.translations[lang][key] 
    : (window.translations['es'][key] || key);
};

window.currentLang = localStorage.getItem('reprocost_lang') || 'es';
`;

if (!code.includes('window.t = function(key)')) {
  // Find where it should be inserted, right before window.changeLanguage
  code = code.replace('window.changeLanguage = function(lang)', missingCode + '\\nwindow.changeLanguage = function(lang)');
}

// Next, let's ensure changeLanguage has the correct implementation
const correctChangeLanguage = `window.changeLanguage = function(lang) {
  window.currentLang = lang;
  localStorage.setItem('reprocost_lang', lang);
  
  // Actualizar textos marcados con data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Actualizar placeholders marcados con data-i18n-placeholder
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Sincronizar el selector UI
  const selector = document.getElementById('language-selector');
  if (selector) selector.value = lang;

  // Re-renderizar componentes dinámicos
  if (typeof updateResultados === 'function') updateResultados();
  if (typeof calcTableroControl === 'function') calcTableroControl();
  if (typeof actualizarSelectProtocolos === 'function') actualizarSelectProtocolos();
  if (typeof ejecutarProtocoloInicial === 'function') ejecutarProtocoloInicial();
  if (typeof actualizarProtocoloSeleccionado === 'function') {
    actualizarProtocoloSeleccionado('resx1');
    actualizarProtocoloSeleccionado('resx2');
  }
  lucide.createIcons();
};`;

// We need to replace whatever changeLanguage looks like now.
// Because the regex approach could be messy, let's locate the start and the next function.
const startIdx = code.indexOf('window.changeLanguage = function(lang)');
const endIdx = code.indexOf('// Ejecutar al cargar si no es español', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  code = code.substring(0, startIdx) + correctChangeLanguage + '\\n\\n' + code.substring(endIdx);
}

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed iatf-app.js correctly.');
