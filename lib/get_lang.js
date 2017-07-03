module.exports = function () {
  var osLocale = require('os-locale').sync() === 'pt_BR' ? 'pt' : 'en'
  return require('../lang/' + osLocale)
}
