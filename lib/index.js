var async = require('async')

var checkIfNameIsAvailable = require('./name_verification')
var askUserConfirmationIfNeeded = require('./user_confirmation')
var generate = require('./generator')

var begin
var end

console.log()

async.waterfall([
  checkIfNameIsAvailable,
  askUserConfirmationIfNeeded,
  (next) => {
    begin = new Date().getTime()
    next()
  },
  generate
], (err) => {
  if (err) {
    console.log(LANG[err.code])
    process.exit(1)
  }
  end = new Date().getTime()
  var timeElapsed = (end - begin) / 1000
  console.log()
  console.log(LANG.PROCESS_FINISHED + ' (' + timeElapsed.toFixed(2) + 's)')
  process.exit()
})
