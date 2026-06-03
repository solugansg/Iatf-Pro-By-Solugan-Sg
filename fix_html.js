const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<!-- Barra de Navegación Inferior \(Móvil\) -->[\s\S]*?<\/nav>/, '');

const bottomNavHtml = `
      <!-- Barra de Navegación Inferior (Móvil) -->
      <nav class="mobile-bottom-nav" style="display: none;">
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
      </nav>
`;

html = html.replace('</main>', bottomNavHtml + '\n    </main>');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed index.html bottom nav clicks');
