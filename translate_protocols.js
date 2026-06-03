const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

const tProtocolCode = `
window.tProtocol = function(val) {
  if (!val) return val;
  const currentLang = window.currentLang || 'es';
  if (currentLang === 'es') return val;
  
  const mapEn = {
    'Resincronizacion 1 (IATF)': 'Resynchronization 1 (FTAI)',
    'Resincronizacion 2 (IATF)': 'Resynchronization 2 (FTAI)',
    'Tradicional (IATF)': 'Traditional (FTAI)',
    'Jsynch (IATF)': 'Jsynch (FTAI)',
    'Novillas (IATF)': 'Heifers (FTAI)',
    'Ovsynch (IATF)': 'Ovsynch (FTAI)',
    'Cosynch (IATF)': 'Cosynch (FTAI)',
    'Heatsynch (IATF)': 'Heatsynch (FTAI)',
    'Presynch (IA)': 'Presynch (AI)',
    'Selectsynch (IA)': 'Selectsynch (AI)',
    'Dib Vacas (IA)': 'Dib Cows (AI)',
    'Dib Novillas (IA)': 'Dib Heifers (AI)',
    'DoblePGF2@ (IA)': 'DoublePGF2@ (AI)',
    'Monta Natural 1 (IA)': 'Natural Mating 1 (AI)',
    'Monta Natural 2 (IA)': 'Natural Mating 2 (AI)',
    'Monta Natural 3 DIB (IA)': 'Natural Mating 3 DIB (AI)',
    'Receptoras 1 (IATF)': 'Recipients 1 (FTAI)',
    'Receptoras 2 (IATF)': 'Recipients 2 (FTAI)',
    'Utilizar DIB de segundo uso - Iatf 48-60 hs GnRh opcional': 'Use 2nd use DIB - FTAI 48-60 hs optional GnRh',
    'Transferencia de Embriones': 'Embryo Transfer',
    'IA celo detectado ó Toro x 5 dias': 'AI detected heat or Bull x 5 days',
    'Observar celo 1-5 dias IA 12 horas post celo estable': 'Observe heat 1-5 days AI 12 hours post stable heat',
    'IA celo detectado + GnRh': 'AI detected heat + GnRh',
    'Observar celo - IA 12 horas post celo estable': 'Observe heat - AI 12 hours post stable heat',
    'IATF 48-52 horas post Pgf2@': 'FTAI 48-52 hours post Pgf2@',
    'IATF 48 horas + GnRh': 'FTAI 48 hours + GnRh',
    'IATF 17-24 horas post GnRh': 'FTAI 17-24 hours post GnRh',
    'IATF 24-32 horas': 'FTAI 24-32 hours',
    'IATF 72 hs + GnRh': 'FTAI 72 hs + GnRh',
    'IATF 48-60 hs - GnRh Opcional': 'FTAI 48-60 hs - Optional GnRh',
    'IATF 48-56 hs - GnRh Opcional': 'FTAI 48-56 hs - Optional GnRh',
    'Utilizar DIB de segundo uso - iatf 48-60 hs GnRh opcional': 'Use 2nd use DIB - FTAI 48-60 hs optional GnRh'
  };
  
  const mapPt = {
    'Resincronizacion 1 (IATF)': 'Ressincronização 1 (IATF)',
    'Resincronizacion 2 (IATF)': 'Ressincronização 2 (IATF)',
    'Tradicional (IATF)': 'Tradicional (IATF)',
    'Jsynch (IATF)': 'Jsynch (IATF)',
    'Novillas (IATF)': 'Novilhas (IATF)',
    'Ovsynch (IATF)': 'Ovsynch (IATF)',
    'Cosynch (IATF)': 'Cosynch (IATF)',
    'Heatsynch (IATF)': 'Heatsynch (IATF)',
    'Presynch (IA)': 'Presynch (IA)',
    'Selectsynch (IA)': 'Selectsynch (IA)',
    'Dib Vacas (IA)': 'Dib Vacas (IA)',
    'Dib Novillas (IA)': 'Dib Novilhas (IA)',
    'DoblePGF2@ (IA)': 'DuploPGF2@ (IA)',
    'Monta Natural 1 (IA)': 'Monta Natural 1 (IA)',
    'Monta Natural 2 (IA)': 'Monta Natural 2 (IA)',
    'Monta Natural 3 DIB (IA)': 'Monta Natural 3 DIB (IA)',
    'Receptoras 1 (IATF)': 'Receptoras 1 (IATF)',
    'Receptoras 2 (IATF)': 'Receptoras 2 (IATF)',
    'Utilizar DIB de segundo uso - Iatf 48-60 hs GnRh opcional': 'Usar DIB de segundo uso - IATF 48-60 hs GnRh opcional',
    'Transferencia de Embriones': 'Transferência de Embriões',
    'IA celo detectado ó Toro x 5 dias': 'IA cio detectado ou Touro x 5 dias',
    'Observar celo 1-5 dias IA 12 horas post celo estable': 'Observar cio 1-5 dias IA 12 horas pós cio estável',
    'IA celo detectado + GnRh': 'IA cio detectado + GnRh',
    'Observar celo - IA 12 horas post celo estable': 'Observar cio - IA 12 horas pós cio estável',
    'IATF 48-52 horas post Pgf2@': 'IATF 48-52 horas pós Pgf2@',
    'IATF 48 horas + GnRh': 'IATF 48 horas + GnRh',
    'IATF 17-24 horas post GnRh': 'IATF 17-24 horas pós GnRh',
    'IATF 24-32 horas': 'IATF 24-32 horas',
    'IATF 72 hs + GnRh': 'IATF 72 hs + GnRh',
    'IATF 48-60 hs - GnRh Opcional': 'IATF 48-60 hs - GnRh Opcional',
    'IATF 48-56 hs - GnRh Opcional': 'IATF 48-56 hs - GnRh Opcional',
    'Utilizar DIB de segundo uso - iatf 48-60 hs GnRh opcional': 'Usar DIB de segundo uso - IATF 48-60 hs GnRh opcional'
  };

  if (currentLang === 'en') {
    return mapEn[val] || val;
  }
  if (currentLang === 'pt') {
    return mapPt[val] || val;
  }
  return val;
};
`;

if (!code.includes('window.tProtocol = function')) {
  code = code.replace('window.translations = {', tProtocolCode + '\\nwindow.translations = {');
}

function replaceAll(str, find, replace) {
  return str.split(find).join(replace);
}

code = replaceAll(code, "${protocol.name}", "${window.tProtocol(protocol.name)}");
code = replaceAll(code, "${protocol.obs || 'S/O'}", "${protocol.obs ? window.tProtocol(protocol.obs) : 'S/O'}");
code = replaceAll(code, "IA/TE: Day ${protocol.ia}", "IA/TE: ${t('table_th_day')} ${protocol.ia}");

code = replaceAll(code, "opt.innerText = prot.name;", "opt.innerText = window.tProtocol(prot.name);");
code = replaceAll(code, "opt.innerText = p.name;", "opt.innerText = window.tProtocol(p.name);");
code = replaceAll(code, "opt.text = prot.name;", "opt.text = window.tProtocol(prot.name);");

fs.writeFileSync(file, code, 'utf8');
console.log('Translated protocol names and obs successfully.');
