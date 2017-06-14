/**
 * Created by kevingamboa17 on 5/30/17.
 */
var gitManager = require('./git_manager')
var xmlManager = require('./xml_manager')
var testGenerator = require('./test_Generator')
var path = require('path')
var sep = path.sep
var xmlFileName = 'TEST-mx.yellowme.androidschool.'
var xmlPath = process.cwd() + sep + 'app' + sep + 'build' + sep + 'test-results' + sep + 'testDebugUnitTest' + sep
var androidProyectPath = process.cwd()
var testfilename
var results
var branchTestName

function testExercise (exercise) {
  branchTestName = exercise
  testfilename = exercise + '.java'
  xmlFileName += exercise + '.xml'
  xmlPath += xmlFileName
  return new Promise(function (resolve, reject) {
    gitManager.buildTestEnviroment(testfilename, branchTestName)
        .then(function () {
          return testGenerator(androidProyectPath)
        })
        .then(function () {
          return xmlManager(xmlPath)
        })
        .then(function (resultsXml) {
          results = resultsXml
          return gitManager.destroyTestEnviroment()
        })
       .then(function () {
         resolve(results)
       })
        .catch(function (err) {
          console.log(err)
          reject(err)
        })
  })
}

exports.getResultsTest = testExercise
