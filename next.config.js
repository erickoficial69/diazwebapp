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
        urlPattern: '/',
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
            }
          }
      },
      {
        urlPattern: /\.js$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
            }
          }
      },
      {
        urlPattern: /\.css$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
            }
          }
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
            }
          }
      },
      {
        urlPattern: /^https?.*\/\/apuestanweb.ml\/wp-content\/uploads\/.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
            }
          }
      },
      {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
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
module.exports = withOffline({
  images: {
    domains: ['0.0.0.0','localhost','apuestanweb.com','apuestanweb.ml'],
  },
  env:{
    API:process.env.API || 'http://localhost:5000/wp-json',
  }
})