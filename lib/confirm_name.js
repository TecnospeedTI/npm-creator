var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

module.exports = function (callback) {
  rl.question('This name is already taken. Do you wish to continue anyway? (y/n) ', function (answer) {
    var isYes = answer.trim() === '' || ['y', 's'].indexOf(answer.toLowerCase().trim()) !== -1
    if (!isYes) return callback(new Error('EXIT'))
    callback()
  })
}
