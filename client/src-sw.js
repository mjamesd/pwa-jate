const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);
const maxAgeSeconds = 30 * 24 * 60 * 60; // 30 days * 24 hours * 60 minutes * 60 seconds
const maxEntries = 60;

// cache the main page
const pageMatchCallback = ({ request }) => request.mode === 'navigate';
const pageCache = new CacheFirst({
    cacheName: 'jate-page-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
    ],
});
warmStrategyCache({
    urls: ['/index.html', '/'],
    strategy: pageCache,
});
registerRoute(pageMatchCallback, pageCache);

// cache the images for 30 days
const imgMatchCallback = ({ request }) => request.destination === 'image';
const imgCache = new CacheFirst({
    cacheName: 'jate-image-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxEntries,
            maxAgeSeconds,
        }),
    ],
});
registerRoute(imgMatchCallback, imgCache);


// cache CSS ('style'), and JS ('script') files for 30 days
const assestMatchCallback = ({ request }) => ['style', 'script', 'worker'].includes(request.destination);
const assetCache = new StaleWhileRevalidate({
    cacheName: 'jate-asset-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxEntries,
            maxAgeSeconds,
        }),
    ],
});
registerRoute(assestMatchCallback, assetCache);