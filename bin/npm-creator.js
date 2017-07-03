var minimist = require('minimist')

var args = minimist(process.argv.slice(2))
var osLanguage = require('os-locale').sync() === 'pt_BR' ? 'pt' : 'en'

global.LANG = require('../lang/' + osLanguage)

if (!args._.length) {
  console.log()
  console.log('  ' + LANG.COMMAND_USAGE)
  console.log()
  console.log('  ' + LANG.COMMAND_OPTIONS + ':')
  console.log()
  console.log('    -v, --version\t' + LANG.VERSION_DESCRIPTION)
  console.log('    -t, --type\t\t' + LANG.TYPE_DESCRIPTION)
  process.exit()
}

if (args.v) {
  console.log(require('../package.json').version)
  process.exit()
}

if (args.t && ['bin-lib', 'bin', 'lib'].indexOf(args.t) !== -1) {
  console.log(LANG.INVALID_TYPE)
  process.exit(1)
}

global.OPTIONS = {
  name: args._[0],
  type: typeof args.t === 'boolean' ? 'bin-lib' : args.t
}

require('../lib')
