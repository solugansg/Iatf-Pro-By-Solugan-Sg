// Iatf Pro by Solugan SG - Service Worker V 260618.29
const CACHE_NAME = 'iatfpro-v260618.29';

// Todos los archivos que se guardan en caché para uso offline
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'style.css',
  'iatf-app.js',
  'lucide.min.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'Logo Iatf Pro.png',
  // Librerías locales
  'libs/chart.min.js',
  'libs/chartjs-plugin-datalabels.min.js',
  'libs/html2pdf.min.js',
  'libs/xlsx-js-style.min.js',
  'libs/firebase-app-compat.js',
  'libs/firebase-auth-compat.js',
  'libs/firebase-firestore-compat.js',
  // Fuentes locales
  'fonts/inter-400.woff2',
  'fonts/inter-600.woff2',
  'fonts/inter-700.woff2'
];

// ─── INSTALL: Descargar y cachear todo al instalar ───────────────────────────
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
      console.log('[Iatf Pro SW] Instalación completa. App lista para uso offline.');
      return self.skipWaiting(); // Activar inmediatamente
    })
  );
});

// ─── ACTIVATE: Limpiar cachés viejos ─────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[Iatf Pro SW] Activando nueva versión...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log(`[SW] Eliminando caché viejo: ${name}`);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('[Iatf Pro SW] Activado. Controlando todas las pestañas.');
      return self.clients.claim();
    })
  );
});

// ─── FETCH: Network First para HTML/CSS, Cache First para recursos estáticos ──
self.addEventListener('fetch', (event) => {
  // Solo manejar solicitudes GET
  if (event.request.method !== 'GET') return;

  // Ignorar extensiones de Chrome
  if (event.request.url.startsWith('chrome-extension://')) return;

  // Ignorar Firebase, APIs externas y gstatic (auth, firestore, etc.)
  if (event.request.url.includes('firebaseapp.com') ||
      event.request.url.includes('googleapis.com') ||
      event.request.url.includes('gstatic.com') ||
      event.request.url.includes('firestore.googleapis.com') ||
      event.request.url.includes('identitytoolkit') ||
      event.request.url.includes('securetoken')) return;

  const url = new URL(event.request.url);
  // Network First: HTML, CSS, y el JS principal de la app
  const isNetworkFirst = url.pathname.endsWith('/') ||
                         url.pathname.endsWith('.html') ||
                         url.pathname.endsWith('.css') ||
                         url.pathname.endsWith('iatf-app.js');

  if (isNetworkFirst) {
    // ── NETWORK FIRST: siempre traer la versión más nueva del servidor ──
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request, { ignoreSearch: true }).then(cached => {
            if (cached) return cached;
            if (event.request.mode === 'navigate' || event.request.destination === 'document') {
              return caches.match('index.html', { ignoreSearch: true });
            }
          });
        })
    );
  } else {
    // ── CACHE FIRST REAL: fuentes, imágenes, librerías JS ──
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
        if (cachedResponse) {
          // Retornar la versión en caché directamente (cero consumo del servidor)
          return cachedResponse;
        }
        return fetch(event.request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            if (event.request.destination === 'document') {
              return caches.match('index.html', { ignoreSearch: true });
            }
          });
      })
    );
  }
});

// ─── MESSAGE: Forzar actualización desde la app ───────────────────────────────
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

