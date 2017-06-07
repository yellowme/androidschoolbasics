var git = require('simple-git')(process.cwd())
var fs = require('fs')
var path = require('path')
var sep = path.sep
var testDir = process.cwd() + sep + 'app' + sep + 'src' + sep + 'test' + sep + 'java' + sep + 'mx' + sep + 'yellowme' + sep + 'androidschool'

function configBranches () {
  return new Promise(function (resolve, reject) {
    git.checkout('master')
        .checkoutLocalBranch('base', prepareTestFiles())
        .add('.')
        .commit('clean project')
        .checkoutLocalBranch('tests')
        .checkout('base')

    resolve()
  })
}

function prepareTestFiles () {
  fs.readdir(testDir, function (err, files) {
    if (err) { return err }
    eliminateFile(files)
  })
}

function eliminateFile (files) {
  files.forEach(function (file) {
    fs.unlink(testDir + sep + file)
  })
}

exports.config = configBranches
