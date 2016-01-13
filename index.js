var helloString = require('@demo/hello-string')
var welcomeString = require('@demo/welcome-string')

function welcome (name) {
  return helloString(name) + '! ' + welcomeString()
}

welcome.goodbye = function () {
  return 'goodbye!'
}

module.exports = welcome
