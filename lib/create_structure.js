var fs = require('fs')
var path = require('path')
var rmdir = require('rmdir')
var async = require('async')

module.exports = function (options, callback) {
  var basePath = path.join(process.cwd(), options.name)

  try {
    fs.unlinkSync(path.join(basePath, 'package-lock.json'))
  } catch (err) {}

  async.parallel([
    function updateBin (done) {
      fs.rename(
        path.join(basePath, 'bin', 'bin'),
        path.join(basePath, 'bin', options.name),
        done)
    },
    function updatePackage (done) {
      var packageJsonPath = path.join(basePath, 'package.json')
      fs.readFile(packageJsonPath, function (err, content) {
        if (err) return done(err)
        var packageJson = JSON.parse(content.toString())
        packageJson.name = options.name
        packageJson.license = options.license.toUpperCase()
        packageJson.bin = './bin/' + options.name
        if (options.type.indexOf('bin') === -1) {
          packageJson.main = './lib'
          delete packageJson.bin
          delete packageJson.dependencies.minimist
        }
        fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), done)
      })
    },
    function updateType (done) {
      if (options.type.indexOf('bin') !== -1) return done()
      rmdir(path.join(basePath, 'bin'), done)
    },
    function updateLicense (done) {
      async.each(['mit', 'gnu', 'apache'], function (license, cb) {
        if (options.license === license) {
          return fs.rename(
            path.join(basePath, 'LICENSE-' + license.toUpperCase()),
            path.join(basePath, 'LICENSE'),
            cb)
        }
        fs.unlink(path.join(basePath, 'LICENSE-' + license.toUpperCase()), cb)
      }, done)
    },
    function updateReadme (done) {
      var readmePath = path.join(basePath, 'README.md')
      fs.readFile(readmePath, function (err, content) {
        if (err) return done(err)

        content = content
          .toString()
          .replace(/\{NAME\}/g, options.name)
          .replace(/\{LICENSE\}/g, options.license.toUpperCase())

        if (options.type.indexOf('bin') !== -1) {
          content = content.replace('$ npm install', '$ npm install -g')
        }

        fs.writeFile(readmePath, content, done)
      })
    }
  ], function (err) {
    if (err) {
      console.log(JSON.stringify(err, null, 2))
      return callback(new Error('ERROR_CREATING_STRUCTURE'))
    }
    callback()
  })
}
