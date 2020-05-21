const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'production'? false : true,
        register: process.env.NODE_ENV === 'production'? true : false,
        scope: '/',
        sw: 'sw.js',
        dest : 'public',

        runtimeCaching:[
            {
                urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                cacheName: 'google-fonts',
                expiration: {
                    maxEntries: 4,
                    maxAgeSeconds: 255 * 24 * 60 * 60 // 255 days
                }
                }
            },
            {
                urlPattern: /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
                handler: 'CacheFirst',
                options: {
                cacheName: 'font-awesome',
                expiration: {
                    maxEntries: 1,
                    maxAgeSeconds: 255 * 24 * 60 * 60 // 25 days
                }
                }
            },
            {
                urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
                handler: 'StaleWhileRevalidate',
                options: {
                cacheName: 'static-font-assets',
                expiration: {
                    maxEntries: 4,
                    maxAgeSeconds: 255 * 24 * 60 * 60 // 255 days
                }
                }
            },
            {
                urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
                handler: 'StaleWhileRevalidate',
                options: {
                cacheName: 'static-image-assets',
                expiration: {
                    maxEntries: 64,
                    maxAgeSeconds: 24 * 24 * 60 * 60 // 24 days
                }
                }
            },
            {
                urlPattern: /\.(?:js)$/i,
                handler: 'StaleWhileRevalidate',
                options: {
                cacheName: 'static-js-assets',
                expiration: {
                    maxEntries: 16,
                    maxAgeSeconds: 24 * 24 * 60 * 60 // 24 days
                }
                }
            },
            {
                urlPattern: /\.(?:css|less)$/i,
                handler: 'StaleWhileRevalidate',
                options: {
                cacheName: 'static-style-assets',
                expiration: {
                    maxEntries: 16,
                    maxAgeSeconds: 24 * 24 * 60 * 60 // 24 days
                }
                }
            },
            {
                urlPattern: /\.(?:json|xml|csv)$/i,
                handler: 'StaleWhileRevalidate',
                options: {
                cacheName: 'static-data-assets',
                expiration: {
                    maxEntries: 16,
                    maxAgeSeconds: 24 * 60 * 60 // 24 hours
                }
                }
            },
            {
                urlPattern: /.*/i,
                handler: 'StaleWhileRevalidate',
                options: {
                cacheName: 'others',
                expiration: {
                    maxEntries: 16,
                    maxAgeSeconds: 24 * 60 * 60 // 24 hours
                }
                }
            },
            {
                urlPattern: /^https?:\/\/backenddwa.herokuapp.com\/graphql/,
                handler: 'CacheFirst',
                options: {
                cacheName: 'graphql',
                expiration: {
                    maxEntries: 4,
                    maxAgeSeconds: 25 * 24 * 60 * 60 // 25 days
                }
                }
            },
            {
                urlPattern: /^https?:.*/,
                handler: 'NetworkFirst',
                options: {
                cacheName: 'all',
                expiration: {
                    maxEntries: 4,
                    maxAgeSeconds: 25 * 24 * 60 * 60 // 25 days
                }
                }
            },
        ]
      }
})
