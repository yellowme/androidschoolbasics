/**
 * Created by kevingamboa17 on 5/30/17.
 */

var parseString = require('../node_modules/xml2js').parseString;
var fs = require('fs');
var ministring;
var expected;
var butWas;
var message;
var results;


function analize(path){
    return new Promise(function (resolve, reject) {
        fs.readFile(path,function(err,data){
            if(err) {
                resolve(["File not found || Elements not found"]);
                return;
            }
            parseString(data, function (err, result) {
                if(Number(result.testsuite.$.failures)>0){
                    ministring=result.testsuite.testcase[0].failure[0].$.message.substring(38);

                    if(Number(ministring.indexOf("expected"))<0)
                        message=ministring;
                    else
                        messageManagment();
                }
                else { message="All correct"; ministring="All correct";}
                //results=[message,expected,butWas];
                results=[ministring];
                if(message!=undefined)
                    resolve(results);
                else
                    reject("Message undefined");

            });
        })
    })
}

function messageManagment() {
    message=ministring.substring(0,ministring.indexOf("expected"));
    expected=ministring.substring(ministring.indexOf("expected")+9,ministring.indexOf("but"));
    butWas=ministring.substring(ministring.indexOf("but")+8);
}

module.exports=analize;
