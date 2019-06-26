'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet.sayHello('JOHN'));
console.log(math.add([1,3,5])); // 4
console.log(math.subtract([1,3,5])); // -2
console.log(math.divide([1,3,5])); // -2
console.log(math.multiply([1,3,5])); // -2

