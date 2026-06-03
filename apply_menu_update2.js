const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const regex = /<nav class="mobile-bottom-nav"[^>]*>[\s\S]*?<\/nav>/;
const navInferiorNueva = `<nav class="mobile-bottom-nav" style="display: none;">
        <button class="nav-btn-bottom mobile-menu-trigger" onclick="toggleSidebar()">
          <i data-lucide="menu"></i>
          <span>Menú</span>
        </button>
        <button class="nav-btn-bottom active" data-target="dashboard" onclick="document.querySelector('.nav-btn[data-target=\\'dashboard\\']').click()">
          <i data-lucide="layout-dashboard"></i>
          <span data-i18n="sidebar_dash_roi">Dashboard/ROI</span>
        </button>
        <button class="nav-btn-bottom" data-target="buscador-historico" onclick="document.querySelector('.nav-btn[data-target=\\'buscador-historico\\']').click()">
          <i data-lucide="search"></i>
          <span data-i18n="sidebar_history">Histórico</span>
        </button>
        <button class="nav-btn-bottom" data-target="aliados-comerciales" onclick="document.querySelector('.nav-btn[data-target=\\'aliados-comerciales\\']').click()">
          <i data-lucide="handshake"></i>
          <span data-i18n="sidebar_aliados">Aliados</span>
        </button>
      </nav>`;

html = html.replace(regex, navInferiorNueva);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Update done properly');
