/**
 * Created by kevingamboa17 on 5/30/17.
 */

var parseString = require('../node_modules/xml2js').parseString
var fs = require('fs')
var ministring
var message
var results

function analize (path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
      if (err) {
        resolve(['Elements missing, check your id'])
        return
      }
      parseString(data, function (err, result) {
        if (err) {
          reject(new Error('data error'))
        }
        if (Number(result.testsuite.$.failures) > 0) {
          ministring = result.testsuite.testcase[0].failure[0].$.message.substring(38)

          if (Number(ministring.indexOf('expected')) < 0) { message = ministring } else { messageManagment() }
        } else { message = 'All correct'; ministring = 'All correct' }
        results = [ministring]
        if (message !== undefined) { resolve(results) } else { reject(new Error('Message undefined')) }
      })
    })
  })
}

function messageManagment () {
  message = ministring.substring(0, ministring.indexOf('expected'))
}

module.exports = analize
