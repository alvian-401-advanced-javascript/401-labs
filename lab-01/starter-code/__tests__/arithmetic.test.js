'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('is valid input function', () => {
    it('should return true if param is array of only numbers', () => {
        let validInput = [5, 5, 5];
        expect(arithmetic.isValidInput(validInput).toBeTruthy);
    })
    it('otherwise returns false', () => {
        let invalidInput = [5, 5, 'pickle'];
        expect(arithmetic.isValidInput(invalidInput).toBeFalsy);
    })
});

describe('add numbers function', () => {
    it('return the sum of all numbers in an array', () => {
        let testArr = [1, 2, 3, 4, 5];
        // let sum = arithmetic.add(testArr)
        expect(arithmetic.add(testArr)).toEqual(15);
    })
})

describe('multiply numbers function', () => {
    it('returns the product of all numbers in an array', () => {
        let testArr = [1, 2, 3, 4, 5];
        expect(arithmetic.multiply(testArr)).toEqual(120);
    })
})

describe('divide numbers function', () => {
    it('returns the qoutient of all numbers in an array', () => {
        let testArr = [1, 2, 3, 4, 5];
        expect(arithmetic.divide(testArr)).toEqual(.008);
    })
})

describe('subtract numbers function', () => {
    it('returns the difference of all numbers in an array', () => {
        let testArr = [1, 2, 3, 4, 5];
        expect(arithmetic.subtract(testArr)).toEqual(-13);
    })
})
