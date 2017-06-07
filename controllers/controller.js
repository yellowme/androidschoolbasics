/**
 * Created by kevingamboa17 on 5/30/17.
 */
var git_manager=require('./git_manager');
var xml_manager=require('./xml_manager');
var test_generator=require('./test_Generator');
var path = require('path');
var sep = path.sep;
var xmlFileName = "TEST-mx.yellowme.androidschool."; 
//var xmlPath = __dirname+sep+".."+sep+"androidschool" +sep+"app"+sep+"build"+sep+"test-results"+sep+"debug"+sep;
var xmlPath = process.cwd()+sep+"app"+sep+"build"+sep+"test-results"+sep+"debug"+sep;
//var androidProyectPath = __dirname+sep+".."+sep+"androidschool";
var androidProyectPath=process.cwd();
var testfilename;
var results;

//testExercise("Ejercicio3Test");

function testExercise(exercise) {
    testfilename=exercise+".java";
    xmlFileName+=exercise+".xml";
    xmlPath+=xmlFileName;
    return new Promise(function (resolve,reject) {
        git_manager.buildTestEnviroment(androidProyectPath,testfilename)
        .then(function () {
            return test_generator(androidProyectPath);
        })
        .then(function () {
            return xml_manager(xmlPath);
        })
        .then(function (resultsXml) {
            results=resultsXml;
            return git_manager.destroyTestEnviroment();
        })
       .then(function () {
            //console.log(results)
            resolve(results);
            return;
        })
        .catch(function (err) {
            console.log(err);
            reject(err);
            return;
        });
    })
}

exports.getResultsTest = testExercise;