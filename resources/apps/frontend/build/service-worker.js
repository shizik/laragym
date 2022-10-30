'use strict';
var precacheConfig = [
    ['/index.html', 'c409559d00d7193186667d5f0192d33e'],
    ['/static/css/main.5fced9da.css', '1a745e3891cb09bab408ad508dfae176'],
    ['/static/js/0.cdf1ee2b.chunk.js', '142b71969d2dbbc4462ee207c2137a83'],
    ['/static/js/1.257acc87.chunk.js', 'a267ae5de4002cb2996be585d5071fc0'],
    ['/static/js/10.f2c52a9f.chunk.js', '3304543aef73832ffd595a3a5f6f0523'],
    ['/static/js/11.b8562cc3.chunk.js', '96a75a2e678316e3dd5ec78a330c7beb'],
    ['/static/js/12.be68ae0e.chunk.js', '7059d347b96850c200b68a61e823402b'],
    ['/static/js/13.9481837f.chunk.js', 'e6e262070684182507989c286926f59f'],
    ['/static/js/14.ef7ab734.chunk.js', 'a5daf59963edc5d50be340e8e0514d70'],
    ['/static/js/15.612e77ba.chunk.js', '03a52fe3ca9759dbafdaefb61b4d9917'],
    ['/static/js/16.05d2e6b0.chunk.js', '84d1b25ab9a3be4ee84d38118ba4ffe4'],
    ['/static/js/17.c9789145.chunk.js', '81c9f3a203b5813f97877c795328102e'],
    ['/static/js/18.5bd69e52.chunk.js', '1905b65a64a40f44157e6573a35d6d6f'],
    ['/static/js/19.9897d439.chunk.js', 'a15fb72786180e9f7da9979393590d83'],
    ['/static/js/2.f02bd3e7.chunk.js', '86cdd8e62fba9d66ce7cfaf3cead7ca5'],
    ['/static/js/20.9c635298.chunk.js', '9e53bc90752544cfeb1786c6eccc558a'],
    ['/static/js/21.61090f8d.chunk.js', '598ec6b49626fd0ed0bb7f9eb5c2df9a'],
    ['/static/js/22.5d6e5ac0.chunk.js', '3cdf70b82193a1a5291311fbc426dd57'],
    ['/static/js/23.e72bfb1a.chunk.js', 'd9f9ed9ff6369558a3baacb7d65b68e0'],
    ['/static/js/24.42231137.chunk.js', '21df35a1773a04f791a3892a826f4fc9'],
    ['/static/js/25.8d45df4e.chunk.js', '5686db1de0b92e0bd593353c9ca1641f'],
    ['/static/js/26.1795ec14.chunk.js', 'd98ff2940b0b4e1683f462d4af7f6ffd'],
    ['/static/js/3.faa2fa3c.chunk.js', '991352510e8639dbbefd300491260724'],
    ['/static/js/4.53377f07.chunk.js', 'a6d66655dc76202dcc33fd6f8deb428a'],
    ['/static/js/5.6e4a4b02.chunk.js', '0f15661d9cd3e71967c1322fe79cb3cc'],
    ['/static/js/6.04c56133.chunk.js', 'cc1d94e778d84e5c6ca5d26ea62c0433'],
    ['/static/js/7.4bd729d2.chunk.js', '72e3f59b9716d98f216a3f4d6f0457c9'],
    ['/static/js/8.c07e32a2.chunk.js', '7e2a288d248c9f7b83b860e7ad2ae50b'],
    ['/static/js/9.8ab837b3.chunk.js', '259c97320285c4a9dbe70c41211ca91a'],
    ['/static/js/main.e16ef4c0.js', '23d039659abb94f363a4ec1ad9641478'],
    ['/static/media/avatar.88962eb7.jpg', '88962eb747475dc855a307e6c283fc67'],
  ],
  cacheName =
    'sw-precache-v3-sw-precache-webpack-plugin-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var a = new URL(e);
    return '/' === a.pathname.slice(-1) && (a.pathname += t), a.toString();
  },
  cleanResponse = function(t) {
    return t.redirected
      ? ('body' in t ? Promise.resolve(t.body) : t.blob()).then(function(e) {
          return new Response(e, {
            headers: t.headers,
            status: t.status,
            statusText: t.statusText,
          });
        })
      : Promise.resolve(t);
  },
  createCacheKey = function(e, t, a, c) {
    var n = new URL(e);
    return (
      (c && n.pathname.match(c)) ||
        (n.search +=
          (n.search ? '&' : '') +
          encodeURIComponent(t) +
          '=' +
          encodeURIComponent(a)),
      n.toString()
    );
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var a = new URL(t).pathname;
    return e.some(function(e) {
      return a.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, a) {
    var t = new URL(e);
    return (
      (t.hash = ''),
      (t.search = t.search
        .slice(1)
        .split('&')
        .map(function(e) {
          return e.split('=');
        })
        .filter(function(t) {
          return a.every(function(e) {
            return !e.test(t[0]);
          });
        })
        .map(function(e) {
          return e.join('=');
        })
        .join('&')),
      t.toString()
    );
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var t = e[0],
        a = e[1],
        c = new URL(t, self.location),
        n = createCacheKey(c, hashParamName, a, /\.\w{8}\./);
      return [c.toString(), n];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(c) {
        return setOfCachedUrls(c).then(function(a) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(t) {
              if (!a.has(t)) {
                var e = new Request(t, {credentials: 'same-origin'});
                return fetch(e).then(function(e) {
                  if (!e.ok)
                    throw new Error(
                      'Request for ' +
                        t +
                        ' returned a response with status ' +
                        e.status
                    );
                  return cleanResponse(e).then(function(e) {
                    return c.put(t, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener('activate', function(e) {
    var a = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(t) {
          return t.keys().then(function(e) {
            return Promise.all(
              e.map(function(e) {
                if (!a.has(e.url)) return t.delete(e);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener('fetch', function(t) {
    if ('GET' === t.request.method) {
      var e,
        a = stripIgnoredUrlParameters(
          t.request.url,
          ignoreUrlParametersMatching
        ),
        c = 'index.html';
      (e = urlsToCacheKeys.has(a)) ||
        ((a = addDirectoryIndex(a, c)), (e = urlsToCacheKeys.has(a)));
      var n = '/index.html';
      !e &&
        'navigate' === t.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], t.request.url) &&
        ((a = new URL(n, self.location).toString()),
        (e = urlsToCacheKeys.has(a))),
        e &&
          t.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(a)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    'The cached response that was expected is missing.'
                  );
                });
              })
              .catch(function(e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    t.request.url,
                    e
                  ),
                  fetch(t.request)
                );
              })
          );
    }
  });
