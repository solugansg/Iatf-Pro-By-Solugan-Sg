const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

js = js.split(`btnPI.innerHTML = '<i data-lucide="eye"></i> MOSTRAR PROTOCOLO'`).join(`btnPI.innerHTML = \`<i data-lucide="eye"></i> <span id="txt-toggle-pi">\${t('btn_show_p')}</span>\``);
js = js.split(`btnReSx1.innerHTML = '<i data-lucide="eye"></i> MOSTRAR PROTOCOLO RESX1'`).join(`btnReSx1.innerHTML = \`<i data-lucide="eye"></i> <span id="txt-toggle-resx1">\${t('btn_show_p')}</span>\``);
js = js.split(`btnReSx2.innerHTML = '<i data-lucide="eye"></i> MOSTRAR PROTOCOLO RESX2'`).join(`btnReSx2.innerHTML = \`<i data-lucide="eye"></i> <span id="txt-toggle-resx2">\${t('btn_show_p')}</span>\``);

fs.writeFileSync('iatf-app.js', js, 'utf8');
