const CACHE = 'blitz-vic20-v3';
const LOCAL = [
  './', './index.html', './blitz.sb3', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'
];
const RUNTIME = 'https://cdn.jsdelivr.net/npm/@turbowarp/scaffolding@0.4.0/dist/scaffolding-min.js';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(LOCAL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (event.request.url === RUNTIME) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return resp;
      }))
    );
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
        if (resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return resp;
      }))
    );
  }
});
