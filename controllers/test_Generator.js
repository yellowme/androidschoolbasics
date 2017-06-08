/**
 * Created by kevingamboa17 on 5/31/17.
 */
var exec = require('child_process').exec
var sep = require('path').sep
var ora = require('ora')
var loadingPhrases = ['Executing tests', 'Checking files', 'Comparing data', 'Finishing touches']
var cont = 0
var testCommand
var spinnerLoading
var interval

function generateTest (androidProyectPath) {
  return new Promise(function (resolve, reject) {
    if (sep === '/') {
      testCommand = 'cd ' + androidProyectPath + '&& ./gradlew clean && ./gradlew test'
    } else {
      testCommand = 'cd ' + androidProyectPath + '&& gradlew clean && gradlew test'
    }
    // spinnerLoading loading initiation and interval to change the phrase every 5 seconds
    spinnerLoading = ora('Configuring tests').start()
    interval = setInterval(change, 5000)

    // Execution of the tests
    exec(testCommand, function (error, stdout, stderr) {
      if (error) {
        spinnerLoading.fail()
        resolve('Elements not found')
        return
      }
      spinnerLoading.succeed('done')
      spinnerLoading.stop()
      resolve('executed')
    })
  })
}

function change () {
  spinnerLoading.succeed()
  spinnerLoading.start()
  spinnerLoading.color = 'green'
  spinnerLoading.text = loadingPhrases[cont]
  cont++
  if (cont > loadingPhrases.length - 1) {
    clearInterval(interval)
  }
}

module.exports = generateTest
