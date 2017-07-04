var request = require('request')

module.exports = function (options, callback) {
  var baseUrl = 'https://api.npms.io/v2/package'

  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'test') {
    baseUrl = 'http://localhost:1337'
  }

  request({
    url: baseUrl + '/' + options.name,
    method: 'get',
    timeout: 3000
  }, function (err, res, body) {
    if (err) return callback(null, true)
    try {
      body = JSON.parse(body)
    } catch (err) {
      return callback(new Error('ERROR_REQUEST'))
    }
    if (body.code === 'INVALID_PARAMETER') {
      return callback(new Error('ERROR_URL_FRIENDLY'))
    }
    callback(null, body.code === 'NOT_FOUND')
  })
}
