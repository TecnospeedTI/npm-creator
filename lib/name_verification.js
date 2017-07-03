var Spinner = require('cli-spinner').Spinner
var request = require('request')

module.exports = (callback) => {
  var spinner = new Spinner('%s ' + LANG.CHECKING_AVAILABILITY)
  spinner.start()

  request({
    url: 'https://api.npms.io/v2/package/' + OPTIONS.name,
    method: 'get',
    timeout: 3000
  }, (err, res, body) => {
    spinner.stop(true)
    if (err) return callback({code: 'ERROR_REQUEST'})
    try {
      body = JSON.parse(body)
    } catch (err) {
      return callback({code: 'ERROR_REQUEST'})
    }
    if (body.code === 'NOT_FOUND') return callback(null, true)
    if (body.code === 'INVALID_PAREMETER') return callback({code: 'ERROR_URL_FRIENDLY'})
    callback(null, false)
  })
}
