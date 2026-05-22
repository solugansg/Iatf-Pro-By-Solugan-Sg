const CACHE_NAME = 'iatf-pro-cache-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './lucide.min.js',
  './app.js'
];

// Instalar Service Worker y guardar en caché los recursos base
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Cacheando recursos base para uso offline');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activar Service Worker y limpiar cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Eliminando caché antigua:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia: Network First (Red primero), cayendo a Caché si no hay conexión
self.addEventListener('fetch', event => {
  // Ignorar peticiones que no sean GET (como las de analíticas o extensiones)
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Si la red responde bien, actualizamos la caché local con la copia fresca
        if (networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Si falla la red (offline), servimos desde la caché
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Retornar fallback si no está en caché y falla la red
        });
      })
  );
});
