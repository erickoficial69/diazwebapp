import { precacheAndRoute } from "workbox-precaching";
 
precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerNavigationRoute('/index.html')

workbox.routing.registerRoute(
  //Use cache js files in this app
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  // Cache CSS files in this app.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files in this app.
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 90000 images.
        maxEntries: 90000,
        // Cache for a maximum of a year.
        maxAgeSeconds: 365 * 24 * 60 * 60,
      })
    ],
  })
);
workbox.routing.registerRoute(
  // Cache image files of external url.
  /^https?:\/\/vcointransfer.herokuapp.com\/static\/images\/.(?:png|jpg|jpeg|svg|gif|webp)$/,
  // Use the cache if it's available.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 90000 images.
        maxEntries: 90000,
        // Cache for a maximum of a year.
        maxAgeSeconds: 365 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(/^https?:\/\/vcointransfer.herokuapp.com\/static\/uploads\/.*/, 
    new workbox.strategies.CacheFirst(),
 'GET')

workbox.routing.registerRoute(/^https?.*/,
    new workbox.strategies.NetworkFirst(),'GET')