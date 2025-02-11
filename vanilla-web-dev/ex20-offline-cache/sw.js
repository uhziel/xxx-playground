const CACHE_VERSION = 1
const cacheName = `mc-v${CACHE_VERSION}`

const precachedResources = [
  "http://launchermeta.mojang.com/mc/game/version_manifest.json",
  "https://launchermeta.mojang.com/mc/game/version_manifest.json",
]

async function precache() {
  console.log("precache", precachedResources)
  const cache = await caches.open(cacheName)
  return cache.addAll(precachedResources)
}

self.addEventListener("install", (event) => {
  console.log("activate", event)
  event.waitUntil(precache())
})

async function removeOutdatedCache() {
  const cacheNames = await caches.keys()
  return Promise.all(cacheNames.map((name) => {
    if (name !== cacheName) {
      console.log(`delete outdated cache: ${name}`)
      return caches.delete(name)
    }
  }))
}

self.addEventListener("activate", (event) => {
  console.log("activate", event)
  event.waitUntil(removeOutdatedCache())
})

async function cacheFirstWithRefresh(request) {
  const cache = await caches.open(cacheName);
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await cache.match(request)) || (await fetchResponsePromise);
}

function isCacheable(request) {
  return precachedResources.includes(request.url)
}

self.addEventListener("fetch", (event) => {
  console.log("fetch", event)
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
})
