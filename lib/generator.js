var Spinner = require('cli-spinner').Spinner
var async = require('async')
var chalk = require('chalk')

module.exports = (callback) => {
  console.log()

  async.series([
    (next) => {
      var spinner = new Spinner('%s ' + LANG.DOWNLOADING_TEMPLATE)
      spinner.start()
      setTimeout(() => {
        spinner.stop(true)
        console.log(chalk.green.bold('[ok] ') + LANG.DOWNLOADING_TEMPLATE)
        next()
      }, 1500)
    },
    (next) => {
      var spinner = new Spinner('%s ' + LANG.CREATING_STRUCTURE)
      spinner.start()
      setTimeout(() => {
        spinner.stop(true)
        console.log(chalk.green.bold('[ok] ') + LANG.CREATING_STRUCTURE)
        next()
      }, 1500)
    }
  ], callback)
}
