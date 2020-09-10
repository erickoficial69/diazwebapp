/* const withWorkbox = require("next-with-workbox");
 
module.exports = withWorkbox({
  workbox:{
    dest: "public",
    swDest: "sw.js",
    swSrc: "service-worker.js",
    force: true
  }
}); */

const withOffline = require('next-offline')
const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200
          }
        }
      },
      {
        urlPattern: /^https?:\/\/vcointransfer.herokuapp.com\/static\/images\/.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
            }
          }
        }
    ]
  }
  }
module.exports = withOffline()