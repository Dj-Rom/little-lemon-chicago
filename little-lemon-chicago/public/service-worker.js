const CACHE_NAME = 'my-site-cache-v1'
const urlsToCache = [
  '/lettle_lemon/',
  '/lettle_lemon/index.html',
  '/lettle_lemon/static/js/main.491e2e6c.js',
  '/lettle_lemon/static/css/main.22698379.css',
  '/lettle_lemon/static/js/assets',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
