var helloString = require('@demo/hello-string')
var welcomeString = require('@demo/welcome-string')

module.exports = function welcome (name) {
  return helloString(name) + '! ' + welcomeString();
}
