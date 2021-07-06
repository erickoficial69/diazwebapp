const withOffline = require('next-offline')
module.exports = withOffline({
  images: {
    domains: ['0.0.0.0','localhost','apuestanweb.com','apuestanweb.ml'],
  },
  env:{
    API:process.env.API || 'http://localhost:5000/wp-json',
    URL_START:process.env.URL_START || 'http://localhost:3000',
  }
})