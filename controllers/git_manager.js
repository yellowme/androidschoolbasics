/**
 * Created by kevingamboa17 on 5/30/17.
 */
var path = require('path')
var sep = path.sep
var testDir = process.cwd() + sep + 'app' + sep + 'src' + sep + 'test' + sep + 'java' + sep + 'mx' + sep + 'yellowme' + sep + 'androidschool'
var git

try {
  git = require('simple-git')(process.cwd())
} catch (error) {
  console.log('No estás en el repositorio del proyecto android')
  process.exit(0)
}

function buildTestEnviroment (testFile, branchName) {
  return new Promise(function (resolve, reject) {
    git.fetch(['origin'])
    .checkout('master')
    .add(['.'])
    .commit('exercise', ['--amend'])
    .checkout('origin/' + branchName)
    .checkoutLocalBranch('provisional')
    .mergeFromTo('master', 'provisional', ['--no-ff'])
    .checkout(['head~', testDir + sep + testFile])
    .add(['.'])
    .commit('test', function (error) {
      if (error) {
        console.log(error)
        reject(error)
      }
      resolve('Done')
    })
  })
}

function destroyTestEnviroment () {
  return new Promise(function (resolve, reject) {
    git.checkout('master')
    .branch(['-D', 'provisional'], function (error) {
      if (error) {
        console.log(error)
        reject(error)
      }
      resolve('Eliminated')
    })
  })
}

exports.buildTestEnviroment = buildTestEnviroment
exports.destroyTestEnviroment = destroyTestEnviroment
