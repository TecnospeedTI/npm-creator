var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

module.exports = (isNameAvailable, callback) => {
  if (isNameAvailable) return callback()
  rl.question(LANG.NAME_UNAVAILABLE + ' ', (answer) => {
    var isYes = answer.trim() === '' || ['y', 's'].indexOf(answer.toLowerCase().trim()) !== -1
    if (isYes) return callback()
    process.exit()
  })
}
