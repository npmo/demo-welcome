/* global describe, it */

var welcomeString = require('./')

require('chai').should()

describe('welcome-string', function () {
  it('welcome string has the word welcome in it', function () {
    var str = welcomeString()
    str.should.match(/Welcome/)
  })

  it('has test for goodbye', function () {
    var str = welcomeString.goodbye()
    str.should.match(/goodbye/)    
  })
})
