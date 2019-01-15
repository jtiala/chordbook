const { assets } = global.serviceWorkerOption;

const CACHE_NAME = `chordbook-${new Date().toISOString()}`;

let assetsToCache = [...assets, "./"];

assetsToCache = assetsToCache.map(path => {
  return new URL(path, global.location).toString();
});

// Cache assets on install
self.addEventListener("install", event => {
  event.waitUntil(
    global.caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Delete old caches on activate
self.addEventListener("activate", event => {
  event.waitUntil(
    global.caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName.indexOf(CACHE_NAME) === 0) {
            return null;
          }

          return global.caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener("message", event => {
  switch (event.data.action) {
    case "skipWaiting":
      if (self.skipWaiting) {
        self.skipWaiting();
        self.clients.claim();
      }
      break;
    default:
      break;
  }
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== global.location.origin) {
    return;
  }

  var resource = fromNetwork(request, 400)
    .catch(function() {
      return fromCache(request);
    })
    .catch(function() {
      if (event.request.mode === "navigate") {
        return global.caches.match("./");
      }

      return null;
    });

  event.respondWith(resource);
});

function fromNetwork(request, timeout) {
  return new Promise(function(fulfill, reject) {
    var timeoutId = setTimeout(reject, timeout);

    fetch(request).then(function(response) {
      clearTimeout(timeoutId);

      if (!response || !response.ok) {
        return reject(response);
      }

      var cacheRepsonse = response.clone();

      global.caches.open(CACHE_NAME).then(function(cache) {
        return cache.put(request, cacheRepsonse);
      });

      fulfill(response);
    }, reject);
  });
}

function fromCache(request) {
  return caches.open(CACHE_NAME).then(function(cache) {
    return cache.match(request).then(function(matching) {
      return matching || Promise.reject("no-match");
    });
  });
}
