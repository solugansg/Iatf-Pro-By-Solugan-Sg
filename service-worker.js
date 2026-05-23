// Iatf Pro by Solugan SG - Service Worker v2.8.2
const CACHE_NAME = 'iatfpro-v2.8.2';

// Todos los archivos que se guardan en cachÃ© para uso offline
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/app.min.js',
  '/lucide.min.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/Logo Iatf Pro.png',
  // LibrerÃ­as locales
  '/libs/chart.min.js',
  '/libs/chartjs-plugin-datalabels.min.js',
  '/libs/html2pdf.min.js',
  '/libs/xlsx.full.min.js',
  // Fuentes locales
  '/fonts/inter-400.ttf',
  '/fonts/inter-600.ttf',
  '/fonts/inter-700.ttf',
  '/fonts/inter-800.ttf'
];

// â”€â”€â”€ INSTALL: Descargar y cachear todo al instalar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
self.addEventListener('install', (event) => {
  console.log('[Iatf Pro SW] Instalando y cacheando recursos...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url =>
          cache.add(url).catch(err => {
            console.warn(`[SW] No se pudo cachear: ${url}`, err);
          })
        )
      );
    }).then(() => {
      console.log('[Iatf Pro SW] InstalaciÃ³n completa. App lista para uso offline.');
      return self.skipWaiting(); // Activar inmediatamente
    })
  );
});

// â”€â”€â”€ ACTIVATE: Limpiar cachÃ©s viejos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
self.addEventListener('activate', (event) => {
  console.log('[Iatf Pro SW] Activando nueva versiÃ³n...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log(`[SW] Eliminando cachÃ© viejo: ${name}`);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('[Iatf Pro SW] Activado. Controlando todas las pestaÃ±as.');
      return self.clients.claim();
    })
  );
});

// â”€â”€â”€ FETCH: Servir desde cachÃ©, con red como respaldo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
self.addEventListener('fetch', (event) => {
  // Solo manejar solicitudes GET
  if (event.request.method !== 'GET') return;

  // Ignorar extensiones de Chrome y solicitudes externas no cacheadas
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      // Si estÃ¡ en cachÃ© â†’ usar cachÃ© (funciona offline)
      if (cachedResponse) {
        // En segundo plano, intentar actualizar desde red
        fetch(event.request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse.clone());
              });
            }
          })
          .catch(() => {}); // Silenciar error si no hay internet

        return cachedResponse;
      }

      // Si NO estÃ¡ en cachÃ© â†’ intentar red
      return fetch(event.request)
        .then(networkResponse => {
          // Guardar en cachÃ© para la prÃ³xima vez
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Sin cachÃ© y sin internet â†’ mostrar pÃ¡gina offline bÃ¡sica
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
    })
  );
});

// â”€â”€â”€ MESSAGE: Forzar actualizaciÃ³n desde la app â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

