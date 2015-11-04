var returnSomething = require('./returnSomething');

function getHello() {
  return returnSomething.returnHello();
}

function sayHello() {
  var hello = getHello();
  console.log(hello);
}

sayHello();
