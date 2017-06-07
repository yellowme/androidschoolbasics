const Exercise = require('workshopper-exercise');
const exe = new Exercise();
var controller = require('../../controllers/controller')

exports.generateExercise = function(path){
    if(path!=null){
        exe.passed = false;
        exe.pathProject=path;
        exe.message = exe.pathProject;
    }
    else {
        exe.passed = true;
        exe.pathProject;
        exe.message = "no funcionó";
    }
    exe.verifyExercise=verifyExercise;

    return exe;
};


function verifyExercise(exe){
    return new Promise(function (resolve,reject) {
        controller.getResultsTest("Ejercicio4Test").then(function (results) {
            if(results[0]=="All correct"){
                exe.passed = true;
                exe.message = results[0];
            }
            else{
                exe.passed = false;
                exe.message = results[0];
            }
            resolve(exe)
            return;
        })
    })
}



exports.ExerciseFunction = verifyExercise;
