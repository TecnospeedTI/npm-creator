var express = require('express')

module.exports = function () {
  var app = express()
  var responses = []
  var server

  return {
    start: function (port, callback) {
      responses = []
      if (server) return callback()
      app.all('/*', function (req, res) {
        var response = responses.shift()
        if (!response) {
          response = {
            status: 200,
            body: ''
          }
        }
        res.status(response.status)
        if (response.isJson) {
          res.json(response.body)
        } else {
          res.send(response.body)
        }
      })
      server = app.listen(port, callback)
    },

    stop: function (callback) {
      if (!server) return callback()
      server.close(function (err) {
        if (err) return callback(err)
        server = undefined
        callback()
      })
    },

    queueResponse: function (status, isJson, body) {
      responses.push({status, isJson, body})
    }
  }
}
