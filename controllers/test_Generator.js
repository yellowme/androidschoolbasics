/**
 * Created by kevingamboa17 on 5/31/17.
 */
var exec = require('child_process').exec;
var sep = require('path').sep;
var testCommand;


function generateTest(androidProyectPath) {
    return new Promise(function (resolve,reject) {
        if(sep=="/"){
            testCommand="cd " + androidProyectPath + "&& ./gradlew clean && ./gradlew test";
        }
        else{
            testCommand="cd " + androidProyectPath + "&& gradlew clean && gradlew test"
        }
        exec(testCommand, function(error, stdout, stderr){
            if(error){
                //console.log(stderr);
                resolve("Elements not found");
                return;
            }
            //console.log(stdout);
            resolve("executed");
        });
    })
}


module.exports = generateTest;
