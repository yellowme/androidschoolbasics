const Exercise = require('workshopper-exercise')
const exe = new Exercise()
var controller = require('../../controllers/controller')
// var messageFile;

exports.generateExercise = function (language) {
  exe.verifyExercise = verifyExercise
  exe.language = language
  return exe
}

function verifyExercise (exe) {
  return new Promise(function (resolve, reject) {
    controller.getResultsTest('ButtonAndToastTest').then(function (results) {
      exe.passed = results[0] === 'All correct'
      exe.message = getMessage(results[0], exe.language)
      resolve(exe)
    })
  })
}

function getMessage (message, language) {
  // get message from a file ./messages/message+language+.md
  return message
}

exports.ExerciseFunction = verifyExercise
