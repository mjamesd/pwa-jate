const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

// cache the main page for 30 days
const pageCache = new CacheFirst({
    cacheName: 'jate-page-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxEntries: 2, // could be `/index.html` or `/`, see urls below
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
});
warmStrategyCache({
    urls: ['/index.html', '/'],
    strategy: pageCache,
});
registerRoute(({ request }) => request.mode === 'navigate', pageCache);


// cache images ('image'), CSS ('style'), and JS ('script') files for 30 days
const assetCache = new StaleWhileRevalidate({
    cacheName: 'jate-asset-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
})
registerRoute(({ request }) => ['image', 'style', 'script', 'worker'].includes(request.destination), assetCache);