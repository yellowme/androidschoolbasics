const Exercise = require('workshopper-exercise')
const exe = new Exercise()
var controller = require('../../controllers/controller')
var jsonMessage = require('./message.json')
// var messageFile;

exports.generateExercise = function (language) {
  exe.verifyExercise = verifyExercise
  exe.language = language
  return exe
}

function verifyExercise (exe) {
  return new Promise(function (resolve, reject) {
    controller.getResultsTest('YellowWorldTest').then(function (results) {
      exe.passed = results[0] === 'All correct'
      exe.message = getMessage(results[0], exe.language)
      resolve(exe)
    })
  })
}

function getMessage (message, language) {
  var finalMessage
  var expected
  var was
  if (!jsonMessage.hasOwnProperty(language)) {
    language = 'en'
  }
  if (message === 'All correct') {
    finalMessage = jsonMessage[language].pass
  } else if (message.indexOf('junit.framework.AssertionFailedError') === 0) {
    // For another assertions, you just need to change the parameter in the validation above
    expected = message.substring(message.lastIndexOf('expected:<') + 10)
    expected = expected.substring(0, expected.indexOf('>'))

    was = message.substring(message.lastIndexOf('was:<') + 5)
    was = was.substring(0, was.indexOf('>'))

    finalMessage = jsonMessage[language].equals + ' ' +
                   jsonMessage[language].exp + expected + ', ' +
                   jsonMessage[language].was + was
  } else {
    finalMessage = jsonMessage[language].fail + '\n' + jsonMessage[language].conditions
  }
  return finalMessage
}

exports.ExerciseFunction = verifyExercise
