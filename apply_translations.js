const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
const code = fs.readFileSync(file, 'utf8');
const lines = code.split('\n');

// Find es block
const esIdx = lines.findIndex(l => l.includes('btn_reiniciar_fase: "REINICIAR FASE"') && !l.includes('btn_ajustar_precios'));
if (esIdx !== -1 && lines[esIdx+2].includes('en: {')) {
  lines[esIdx] = lines[esIdx] + ',';
  lines.splice(esIdx + 1, 0, 
    '    roi_inv_fase: "Inversión por Fase",',
    '    roi_anim_fase: "Animales en Fase",',
    '    roi_preg_logradas: "Preñeces Logradas",',
    '    roi_inv_perdida: "Inversión Perdida (Vacías)",',
    '    roi_costo_preg: "Costo/Preñez en Fase",',
    '    roi_retorno_total: "RETORNO TOTAL PROYECTADO"'
  );
}

// Find en block
const enIdx = lines.findIndex(l => l.includes('btn_reiniciar_fase: "RESET PHASE"'));
if (enIdx !== -1) {
  lines[enIdx] = lines[enIdx] + ',';
  lines.splice(enIdx + 1, 0, 
    '    roi_inv_fase: "Investment per Phase",',
    '    roi_anim_fase: "Animals in Phase",',
    '    roi_preg_logradas: "Pregnancies Achieved",',
    '    roi_inv_perdida: "Lost Investment (Open)",',
    '    roi_costo_preg: "Cost/Pregnancy in Phase",',
    '    roi_retorno_total: "TOTAL PROJECTED RETURN"'
  );
}

// Find pt block
let lastPtIdx = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('btn_reiniciar_fase: "REINICIAR FASE"')) {
    lastPtIdx = i;
    break;
  }
}

if (lastPtIdx !== -1) {
  lines[lastPtIdx] = lines[lastPtIdx] + ',';
  lines.splice(lastPtIdx + 1, 0, 
    '    roi_inv_fase: "Investimento por Fase",',
    '    roi_anim_fase: "Animais na Fase",',
    '    roi_preg_logradas: "Prenhezes Alcançadas",',
    '    roi_inv_perdida: "Investimento Perdido (Vazias)",',
    '    roi_costo_preg: "Custo/Prenhez na Fase",',
    '    roi_retorno_total: "RETORNO TOTAL PROJETADO"'
  );
}

const updatedCode = lines.join('\n');

let finalCode = updatedCode.replace('<th style="text-align: left;">Concepto</th>', '<th style="text-align: left;">${t("dash_concept")}</th>')
.replace('<th>PI</th>', '<th>${t("dash_pi")}</th>')
.replace('<th>Resincronización 1</th>', '<th>${t("resx1_title")}</th>')
.replace('<th>Resincronización 2</th>', '<th>${t("resx2_title")}</th>')
.replace('<th style="color: var(--accent);">Consolidado</th>', '<th style="color: var(--accent);">${t("dash_consolidated")}</th>')
.replace('<td style="text-align:left;">Inversión por Fase</td>', '<td style="text-align:left;">${t("roi_inv_fase")}</td>')
.replace('<td style="text-align:left;">Animales en Fase</td>', '<td style="text-align:left;">${t("roi_anim_fase")}</td>')
.replace('<td style="text-align:left;">Preñeces Logradas</td>', '<td style="text-align:left;">${t("roi_preg_logradas")}</td>')
.replace('<td style="text-align:left;">Inversión Perdida (Vacías)</td>', '<td style="text-align:left;">${t("roi_inv_perdida")}</td>')
.replace('<td style="text-align:left;">Costo/Preñez en Fase</td>', '<td style="text-align:left;">${t("roi_costo_preg")}</td>')
.replace('<td style="text-align:left;"><strong>RETORNO TOTAL PROYECTADO</strong></td>', '<td style="text-align:left;"><strong>${t("roi_retorno_total")}</strong></td>');

fs.writeFileSync(file, finalCode, 'utf8');
console.log('Update complete');
