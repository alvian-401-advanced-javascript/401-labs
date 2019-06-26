'use strict';

const greet = require('../lib/greet.js');

describe('say hello function', () => {
    it('returns concatenation of hello + a string param', () => {
        let testString = 'AJ';
        expect(greet.sayHello(testString)).toStrictEqual('Hello, AJ');
    });
    it('returns null if param is not a string', () => {
        let notAstring = 12345;
        expect(greet.sayHello(notAstring)).toBeNull();
    });
});