const CACHE_NAME = "cabanas-nuba-v1"
const urlsToCache = [
  "/",
  "/images/logo-cabanas-nuba.png",
  "/images/og-image-nuba.jpg",
  "/images/bienvenidos-valle.webp",
  "/images/entrada-nuba-sign.webp",
  "/images/piscina-montanas.webp",
  "/images/cabana-exterior-1.webp",
  "/images/complejo-cabanas.webp",
  "/images/cabana-asador-lena.webp",
  "/images/muebles-exterior.webp",
  "/images/banner-invierno.webp",
  "/images/siguenos-en-redes-sociales.webp",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})
