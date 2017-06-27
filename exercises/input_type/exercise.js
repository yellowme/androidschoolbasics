const Exercise = require('workshopper-exercise')
const exe = new Exercise()
var controller = require('../../controllers/controller')
var jsonMessage = require('./message.json')

exports.generateExercise = function (language) {
  exe.verifyExercise = verifyExercise
  exe.language = language
  return exe
}

function verifyExercise (exe) {
  return new Promise(function (resolve, reject) {
    controller.getResultsTest('InputTypeTest').then(function (results) {
      exe.passed = results[0] === 'All correct'
      exe.message = getMessage(results[0], exe.language)
      resolve(exe)
    })
  })
}

function getMessage (message, language) {
  console.log(message)
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

    // This validation is because i have 2 possible messages in the same assertion
    if (message.indexOf('01') >= 0) {
      finalMessage = jsonMessage[language].equals1 + ' \n' +
                   jsonMessage[language].exp + expected + ', ' +
                   jsonMessage[language].was + was
    } else if (message.indexOf('02') >= 0) {
      finalMessage = jsonMessage[language].equals2 + ' \n' +
                   jsonMessage[language].exp + expected + ', ' +
                   jsonMessage[language].was + was
    } else {
      finalMessage = jsonMessage[language].equals3 + ' \n' +
                   jsonMessage[language].exp + expected + ', ' +
                   jsonMessage[language].was + was
    }
  } else if (message.indexOf('java.lang.NumberFormatException') === 0) {
    finalMessage = jsonMessage[language].formatException
  } else {
    finalMessage = jsonMessage[language].fail + '\n' + jsonMessage[language].conditions
  }
  return finalMessage
}

exports.ExerciseFunction = verifyExercise
