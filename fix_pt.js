const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

// We need to only replace the Portuguese block
const ptIdx = js.indexOf('pt: {');
if (ptIdx !== -1) {
  const endIdx = js.indexOf('}', ptIdx + 2000);
  let ptBlock = js.substring(ptIdx, endIdx);
  
  ptBlock = ptBlock.replace('tc_matriz_title: "MATRIZ DE PROTOCOLOS"', 'tc_matriz_title: "QUADRO DE PROTOCOLOS"');
  ptBlock = ptBlock.replace('btn_show_p: "MOSTRAR PROTOCOLO"', 'btn_show_p: "EXIBIR PROTOCOLO"');
  ptBlock = ptBlock.replace('btn_hide_p: "OCULTAR PROTOCOLO"', 'btn_hide_p: "ESCONDER PROTOCOLO"');
  ptBlock = ptBlock.replace('btn_wa: "ENVIAR POR WA"', 'btn_wa: "ENVIAR PELO WHATSAPP"');
  
  js = js.substring(0, ptIdx) + ptBlock + js.substring(endIdx);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
}
