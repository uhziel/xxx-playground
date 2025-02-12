const CACHE_VERSION = 1
const cacheName = `mc-v${CACHE_VERSION}`

const precachedResources = [
  "https://launchermeta.mojang.com/mc/game/version_manifest.json",
]

const cacheableResources = [
  ...precachedResources,
  "https://httpbin.org/post",
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


// 每一次调用，都会尝试刷新 cache；只有成功(200-299)的请求才会被 cache
// 优先返回 cache；cache 不存在，则返回网络响应的结果
// POST request 不会被 cache，因为 cache.put 会报错 `TypeError: Failed to execute 'put' on 'Cache': Request method 'POST' is unsupporte`
async function cacheFirstWithRefresh(request) {
  const cache = await caches.open(cacheName)
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  })

  return (await cache.match(request)) || (await fetchResponsePromise)
}

function isCacheable(request) {
  return cacheableResources.includes(request.url)
}

self.addEventListener("fetch", (event) => {
  console.log("fetch", event)
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
})
