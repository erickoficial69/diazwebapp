const withPWA = require('next-pwa')

module.exports = withPWA({
  images: {
    domains: ['0.0.0.0','localhost','diazweb.server1.trinchera.dev','localhost:8080'],
  },
  env:{
    API:process.env.API || 'http://localhost:8080',
    DOMAIN:process.env.DOMAIN || 'http://localhost:3000',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
})