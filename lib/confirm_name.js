var readline = require('readline')
var lang = require('./get_lang')()

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

module.exports = function (callback) {
  rl.question(lang.NAME_UNAVAILABLE + ' ', function (answer) {
    var isYes = answer.trim() === '' || ['y', 's'].indexOf(answer.toLowerCase().trim()) !== -1
    if (!isYes) return callback(new Error('EXIT'))
    callback()
  })
}
