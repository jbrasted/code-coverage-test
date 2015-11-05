var expect = require('chai').expect;

describe('Simple test', function () {
  it('7 should equal 7', function () {
    expect(7).to.equal(7);
  });
});

describe('returnSomething', function () {
  var program, hello;

  before(function () {
    program = require('../returnSomething');
  });

  it('should not be null', function () {
    expect(program).not.to.be.null;
  });

  it('should expose method returnHello', function () {
    expect(program).to.respondTo('returnHello');
  });

  it('getHello() should return hello', function () {
    hello = program.returnHello();

    expect(hello).not.to.be.null;
    expect(hello).to.equal('hello');
  });
});
