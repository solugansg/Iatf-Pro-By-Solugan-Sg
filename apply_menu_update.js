const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Eliminar el botn de men de la cabecera mvil
html = html.replace(/<button class="mobile-menu-btn" onclick="toggleSidebar\(\)" aria-label="Abrir Menú">[\s\S]*?<\/button>/, '');

// Reemplazar la barra de navegacin inferior
const navInferiorVieja = `<nav class="mobile-bottom-nav" style="display: none;">
        <button class="nav-btn-bottom active" data-target="tablero-control" onclick="document.querySelector('.nav-btn[data-target=\\'tablero-control\\']').click()">
          <i data-lucide="settings"></i>
          <span data-i18n="sidebar_dashboard">Tablero</span>
        </button>
        <button class="nav-btn-bottom" data-target="protocolo-inicial" onclick="document.querySelector('.nav-btn[data-target=\\'protocolo-inicial\\']').click()">
          <i data-lucide="calendar"></i>
          <span data-i18n="sidebar_pi">Inicial</span>
        </button>
        <button class="nav-btn-bottom" data-target="resincronizacion1" onclick="document.querySelector('.nav-btn[data-target=\\'resincronizacion1\\']').click()">
          <i data-lucide="refresh-cw"></i>
          <span data-i18n="sidebar_resx1">Resinc 1</span>
        </button>
        <button class="nav-btn-bottom" data-target="dashboard" onclick="document.querySelector('.nav-btn[data-target=\\'dashboard\\']').click()">
          <i data-lucide="layout-dashboard"></i>
          <span data-i18n="sidebar_dash_roi">ROI</span>
        </button>
        <button class="nav-btn-bottom mobile-menu-trigger" onclick="toggleSidebar()">
          <i data-lucide="menu"></i>
          <span>Menú</span>
        </button>
      </nav>`;

const navInferiorNueva = `<nav class="mobile-bottom-nav" style="display: none;">
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
        <button class="nav-btn-bottom mobile-menu-trigger" onclick="toggleSidebar()">
          <i data-lucide="menu"></i>
          <span>Menú</span>
        </button>
      </nav>`;

html = html.replace(navInferiorVieja, navInferiorNueva);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Update done');
