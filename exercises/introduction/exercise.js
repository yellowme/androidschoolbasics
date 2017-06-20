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
    controller.getResultsTest('IntroductionTest').then(function (results) {
      exe.passed = results[0] === 'All correct'
      exe.message = getMessage(results[0], exe.language)
      resolve(exe)
    })
  })
}

function getMessage (message, language) {
  var finalMessage
  if (!jsonMessage.hasOwnProperty(language)) {
    language = 'en'
  }

  if (message === 'All correct') {
    finalMessage = jsonMessage[language].pass
  } else {
    finalMessage = jsonMessage[language].fail
  }
  return finalMessage
}

exports.ExerciseFunction = verifyExercise
