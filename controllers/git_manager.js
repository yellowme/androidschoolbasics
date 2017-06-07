/**
 * Created by kevingamboa17 on 5/30/17.
 */
var path = require('path');
var sep = path.sep;
var testDir=process.cwd()+sep+"app"+sep+"src"+sep+"test"+sep+"java"+sep+"mx"+sep+"yellowme"+sep+"androidschool";
//var git = require('simple-git')(process.cwd+"");
//var testDir = __dirname+sep+".."+sep+"androidschool" +sep+"app"+sep+"src"+sep+"test"+sep+"java"+sep+"mx"+sep+"yellowme"+sep+"androidschool";
var git;

try {
  git = require('simple-git')(process.cwd());
} catch (error) {
  console.log("No estás en el repositorio del proyecto android")
  process.exit(0)
}


function buildTestEnviroment(dirName,testFile) {
    return new Promise(function(resolve,reject){
      git.checkout("base",function(err){
        git.add(["."],function() {
          if(err){reject("error1");return};
          git.commit("exercise",function(){
            if(err){reject("error2");return};
            git.checkout("tests",function() {
              if(err){reject("error3");return};
              git.checkoutLocalBranch("provisional",function(){
                if(err){reject("error4");return};
                git.checkout(["head~",testDir+sep+testFile],function(){
                  if(err){reject("error5");return};
                   git.add(["."],function(){
                     git.commit("test",function(){
                       if(err){reject("error6");return};
                       git.mergeFromTo("base","provisional",function(){
                         if(err){reject("error7");return};
                         resolve("done");
                         return;
                       })
                     })
                   })
                });
              })
            })
          })
        })
      })
    });
}


function destroyTestEnviroment() {
    return new Promise(function(resolve,reject) {
        git.checkout("provisional",function(){
            git.commit("hey",function() {
                git.checkout("base",function(){
                    git.branch(['-D','provisional'],function(err) {
                        if(err){
                            reject("Error deleting branch");
                            return;
                        }
                        resolve("eliminated");
                        return;
                    })
                })
            })
        })
    })
}


exports.buildTestEnviroment = buildTestEnviroment;
exports.destroyTestEnviroment = destroyTestEnviroment;
