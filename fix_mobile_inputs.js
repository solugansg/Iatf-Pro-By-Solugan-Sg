const fs = require('fs');

let js = fs.readFileSync('iatf-app.js', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

// Update HTML for resx1-prenadas
const regexResx1 = /<div style="display: flex; gap: 0\.4rem; align-items: center; background: rgba\(255,255,255,0\.02\); padding: 0\.4rem 1rem; border-radius: 8px; border: 1px solid var\(--glass-border\);">\s*<div class="spinner-wrap" style="border-radius: 8px; flex: 0 0 auto; width: 42%;">\s*<button class="spin-btn minus" onclick="spinVal\('resx1-prenadas', -1, false\); debouncedAutoCalcPrenResx1\(\);">&#8722;<\/button>\s*<input type="number" id="resx1-prenadas" value="0" min="0" oninput="debouncedAutoCalcPrenResx1\(\)" onchange="autoCalcPrenResx1\(\)" style="font-size: 1\.5rem; font-weight: 800; background: transparent; border: none; text-align: center;">\s*<button class="spin-btn plus" onclick="spinVal\('resx1-prenadas', 1, false\); debouncedAutoCalcPrenResx1\(\);">&#43;<\/button>\s*<\/div>\s*<div style="width: 1px; height: 30px; background: var\(--glass-border\);"><\/div>\s*<div style="display: flex; align-items: baseline; flex: 1; justify-content: center;">\s*<span id="resx1-porcentaje" class="text-accent" style="font-size: 2rem; font-weight: 800;">0<\/span>\s*<span class="text-accent" style="font-size: 1\.25rem; font-weight: bold; padding-left: 2px;">%<\/span>\s*<\/div>\s*<\/div>/;

const newResx1 = `<div class="pi-preg-row" style="display: flex; gap: 0.4rem; align-items: center; background: rgba(255,255,255,0.02); padding: 0.4rem 1rem; border-radius: 8px; border: 1px solid var(--glass-border);">
                <div class="spinner-wrap" style="border-radius: 8px; flex: 0 0 auto; width: 42%;">
                  <button class="spin-btn minus" onclick="spinVal('resx1-prenadas', -1, false); debouncedAutoCalcPrenResx1();">&#8722;</button>
                  <input type="number" id="resx1-prenadas" value="0" min="0" oninput="debouncedAutoCalcPrenResx1()" onchange="autoCalcPrenResx1()" style="font-size: 1.5rem; font-weight: 800; background: transparent; border: none; text-align: center;">
                  <button class="spin-btn plus" onclick="spinVal('resx1-prenadas', 1, false); debouncedAutoCalcPrenResx1();">&#43;</button>
                </div>
                <div class="pi-preg-divider" style="width: 1px; height: 30px; background: var(--glass-border);"></div>
                <div class="pi-preg-percent-wrap" style="display: flex; align-items: center; flex: 1; justify-content: center;">
                  <div class="spinner-wrap" style="border-radius: 8px; border-color: var(--accent);">
                    <button class="spin-btn minus" onclick="spinVal('resx1-porcentaje', -1, false); debouncedAutoCalcDesdePorcentajeResx1();" style="color: var(--accent);">&#8722;</button>
                    <input type="number" id="resx1-porcentaje" value="0" min="0" max="100" oninput="debouncedAutoCalcDesdePorcentajeResx1()" onchange="autoCalcDesdePorcentajeResx1()" class="text-accent" style="width: 55px; font-size: 2rem; font-weight: 800; background: transparent; border: none; padding: 0 4px; text-align: center; outline: none;">
                    <span class="text-accent" style="font-size: 1.25rem; font-weight: bold; padding-right: 4px;">%</span>
                    <button class="spin-btn plus" onclick="spinVal('resx1-porcentaje', 1, false); debouncedAutoCalcDesdePorcentajeResx1();" style="color: var(--accent);">&#43;</button>
                  </div>
                </div>
              </div>`;

// Update HTML for resx2-prenadas
const regexResx2 = /<div style="display: flex; gap: 0\.4rem; align-items: center; background: rgba\(255,255,255,0\.02\); padding: 0\.4rem 1rem; border-radius: 8px; border: 1px solid var\(--glass-border\);">\s*<div class="spinner-wrap" style="border-radius: 8px; flex: 0 0 auto; width: 42%;">\s*<button class="spin-btn minus" onclick="spinVal\('resx2-prenadas', -1, false\); debouncedAutoCalcPrenResx2\(\);">&#8722;<\/button>\s*<input type="number" id="resx2-prenadas" value="0" min="0" oninput="debouncedAutoCalcPrenResx2\(\)" onchange="autoCalcPrenResx2\(\)" style="font-size: 1\.5rem; font-weight: 800; background: transparent; border: none; text-align: center;">\s*<button class="spin-btn plus" onclick="spinVal\('resx2-prenadas', 1, false\); debouncedAutoCalcPrenResx2\(\);">&#43;<\/button>\s*<\/div>\s*<div style="width: 1px; height: 30px; background: var\(--glass-border\);"><\/div>\s*<div style="display: flex; align-items: baseline; flex: 1; justify-content: center;">\s*<span id="resx2-porcentaje" class="text-accent" style="font-size: 2rem; font-weight: 800;">0<\/span>\s*<span class="text-accent" style="font-size: 1\.25rem; font-weight: bold; padding-left: 2px;">%<\/span>\s*<\/div>\s*<\/div>/;

const newResx2 = `<div class="pi-preg-row" style="display: flex; gap: 0.4rem; align-items: center; background: rgba(255,255,255,0.02); padding: 0.4rem 1rem; border-radius: 8px; border: 1px solid var(--glass-border);">
                <div class="spinner-wrap" style="border-radius: 8px; flex: 0 0 auto; width: 42%;">
                  <button class="spin-btn minus" onclick="spinVal('resx2-prenadas', -1, false); debouncedAutoCalcPrenResx2();">&#8722;</button>
                  <input type="number" id="resx2-prenadas" value="0" min="0" oninput="debouncedAutoCalcPrenResx2()" onchange="autoCalcPrenResx2()" style="font-size: 1.5rem; font-weight: 800; background: transparent; border: none; text-align: center;">
                  <button class="spin-btn plus" onclick="spinVal('resx2-prenadas', 1, false); debouncedAutoCalcPrenResx2();">&#43;</button>
                </div>
                <div class="pi-preg-divider" style="width: 1px; height: 30px; background: var(--glass-border);"></div>
                <div class="pi-preg-percent-wrap" style="display: flex; align-items: center; flex: 1; justify-content: center;">
                  <div class="spinner-wrap" style="border-radius: 8px; border-color: var(--accent);">
                    <button class="spin-btn minus" onclick="spinVal('resx2-porcentaje', -1, false); debouncedAutoCalcDesdePorcentajeResx2();" style="color: var(--accent);">&#8722;</button>
                    <input type="number" id="resx2-porcentaje" value="0" min="0" max="100" oninput="debouncedAutoCalcDesdePorcentajeResx2()" onchange="autoCalcDesdePorcentajeResx2()" class="text-accent" style="width: 55px; font-size: 2rem; font-weight: 800; background: transparent; border: none; padding: 0 4px; text-align: center; outline: none;">
                    <span class="text-accent" style="font-size: 1.25rem; font-weight: bold; padding-right: 4px;">%</span>
                    <button class="spin-btn plus" onclick="spinVal('resx2-porcentaje', 1, false); debouncedAutoCalcDesdePorcentajeResx2();" style="color: var(--accent);">&#43;</button>
                  </div>
                </div>
              </div>`;

html = html.replace(regexResx1, newResx1);
html = html.replace(regexResx2, newResx2);

// Fix flex box wrapping for buttons
html = html.replace(/<div style="display: flex; gap: 1rem; align-items: center; margin-top: 1\.5rem; justify-content: flex-end;">/g, 
  '<div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-top: 1.5rem; justify-content: center;">');

fs.writeFileSync('index.html', html, 'utf8');

// Update JS
// Add debounced functions
const jsDebounceStr = `window.debouncedAutoCalcPrenResx2 = debounce((...args) => { if (typeof window.autoCalcPrenResx2 === 'function') window.autoCalcPrenResx2(...args); }, 150);`;
const jsDebounceNew = `window.debouncedAutoCalcPrenResx2 = debounce((...args) => { if (typeof window.autoCalcPrenResx2 === 'function') window.autoCalcPrenResx2(...args); }, 150);
window.debouncedAutoCalcDesdePorcentajeResx1 = debounce((...args) => { if (typeof window.autoCalcDesdePorcentajeResx1 === 'function') window.autoCalcDesdePorcentajeResx1(...args); }, 150);
window.debouncedAutoCalcDesdePorcentajeResx2 = debounce((...args) => { if (typeof window.autoCalcDesdePorcentajeResx2 === 'function') window.autoCalcDesdePorcentajeResx2(...args); }, 150);`;
js = js.replace(jsDebounceStr, jsDebounceNew);

// Add actual functions
const jsFuncs = `
window.autoCalcDesdePorcentajeResx1 = function() {
  const tot = Math.max(0, parseInt(document.getElementById('resx1-animales').value) || 0);
  const porc = Math.max(0, parseFloat(document.getElementById('resx1-porcentaje').value) || 0);
  const pren = Math.round(tot * (porc / 100));
  const elPren = document.getElementById('resx1-prenadas');
  if(elPren) { elPren.value = pren; }
  window.updateResultados();
};
window.autoCalcDesdePorcentajeResx2 = function() {
  const tot = Math.max(0, parseInt(document.getElementById('resx2-animales').value) || 0);
  const porc = Math.max(0, parseFloat(document.getElementById('resx2-porcentaje').value) || 0);
  const pren = Math.round(tot * (porc / 100));
  const elPren = document.getElementById('resx2-prenadas');
  if(elPren) { elPren.value = pren; }
  window.updateResultados();
};
`;

js += jsFuncs;

// Update autoCalcPrenResx1 and autoCalcPrenResx2 to set input value instead of innerText
js = js.replace("document.getElementById('resx1-porcentaje').innerText = Math.round(porc);", "if(document.getElementById('resx1-porcentaje')) document.getElementById('resx1-porcentaje').value = Math.round(porc);");
js = js.replace("document.getElementById('resx2-porcentaje').innerText = Math.round(porc);", "if(document.getElementById('resx2-porcentaje')) document.getElementById('resx2-porcentaje').value = Math.round(porc);");

fs.writeFileSync('iatf-app.js', js, 'utf8');

console.log('Fixed');
