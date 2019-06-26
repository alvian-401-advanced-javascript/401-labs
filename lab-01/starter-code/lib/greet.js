'use strict';

let greet = module.exports = {};

greet.sayHello = (string) => {
    if(typeof string === 'string') {
        return `Hello, ${string}`;
    } else {
        return null;
    }
};