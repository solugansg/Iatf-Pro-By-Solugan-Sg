const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regexResx2 = /<div style="display: flex; gap: 0\.4rem; align-items: center; background: rgba\(255,255,255,0\.02\); padding: 0\.4rem 1rem; border-radius: 8px; border: 1px solid var\(--glass-border\);">\s*<div class="spinner-wrap" style="border-radius: 8px; flex: 0 0 auto; width: 42%;">\s*<button class="spin-btn minus" onclick="spinVal\('resx2-prenadas', -1, false\); debouncedAutoCalcPrenResx2\(\);">&#8722;<\/button>\s*<input type="number" id="resx2-prenadas" value="0" min="0" oninput="debouncedAutoCalcPrenResx2\(\)" onchange="autoCalcPrenResx2\(\)" style="font-size: 1\.5rem; font-weight: 800; background: transparent; border: none; text-align: center;">\s*<button class="spin-btn plus" onclick="spinVal\('resx2-prenadas', 1, false\); debouncedAutoCalcPrenResx2\(\);">&#43;<\/button>\s*<\/div>\s*<div style="width: 1px; height: 30px; background: var\(--glass-border\);"><\/div>\s*<div style="display: flex; align-items: baseline; flex: 1; justify-content: center;">\s*<span id="resx2-porcentaje" style="font-size: 2rem; font-weight: 800; color: #a855f7;">0<\/span>\s*<span style="font-size: 1\.25rem; font-weight: bold; padding-left: 2px; color: #a855f7;">%<\/span>\s*<\/div>\s*<\/div>/;

const newResx2 = `<div class="pi-preg-row" style="display: flex; gap: 0.4rem; align-items: center; background: rgba(255,255,255,0.02); padding: 0.4rem 1rem; border-radius: 8px; border: 1px solid var(--glass-border);">
                <div class="spinner-wrap" style="border-radius: 8px; flex: 0 0 auto; width: 42%;">
                  <button class="spin-btn minus" onclick="spinVal('resx2-prenadas', -1, false); debouncedAutoCalcPrenResx2();">&#8722;</button>
                  <input type="number" id="resx2-prenadas" value="0" min="0" oninput="debouncedAutoCalcPrenResx2()" onchange="autoCalcPrenResx2()" style="font-size: 1.5rem; font-weight: 800; background: transparent; border: none; text-align: center;">
                  <button class="spin-btn plus" onclick="spinVal('resx2-prenadas', 1, false); debouncedAutoCalcPrenResx2();">&#43;</button>
                </div>
                <div class="pi-preg-divider" style="width: 1px; height: 30px; background: var(--glass-border);"></div>
                <div class="pi-preg-percent-wrap" style="display: flex; align-items: center; flex: 1; justify-content: center;">
                  <div class="spinner-wrap" style="border-radius: 8px; border-color: #a855f7;">
                    <button class="spin-btn minus" onclick="spinVal('resx2-porcentaje', -1, false); debouncedAutoCalcDesdePorcentajeResx2();" style="color: #a855f7;">&#8722;</button>
                    <input type="number" id="resx2-porcentaje" value="0" min="0" max="100" oninput="debouncedAutoCalcDesdePorcentajeResx2()" onchange="autoCalcDesdePorcentajeResx2()" style="width: 55px; font-size: 2rem; font-weight: 800; background: transparent; border: none; padding: 0 4px; text-align: center; outline: none; color: #a855f7;">
                    <span style="font-size: 1.25rem; font-weight: bold; padding-right: 4px; color: #a855f7;">%</span>
                    <button class="spin-btn plus" onclick="spinVal('resx2-porcentaje', 1, false); debouncedAutoCalcDesdePorcentajeResx2();" style="color: #a855f7;">&#43;</button>
                  </div>
                </div>
              </div>`;

if (html.match(regexResx2)) {
  html = html.replace(regexResx2, newResx2);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Fixed resx2');
} else {
  console.log('Regex failed');
}
