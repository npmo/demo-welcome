var helloString = require('@demo/hello-string')
var welcomeString = require('@demo/welcome-string')

function welcome (name) {
  return helloString(name) + '! ' + welcomeString()
}

module.exports = welcome
