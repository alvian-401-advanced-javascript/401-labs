'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('is valid input function', () => {
    it('should return true if param is array of only numbers', () => {
        let validInput = [5, 5, 5];
        expect(arithmetic.isValidInput(validInput).toBeTruthy)
    })
    it('otherwise returns false', () => {
        let invalidInput = [5, 5, 'pickle'];
        expect(arithmetic.isValidInput(invalidInput).toBeFalsy)
    })
});

describe('add numbers function', () => {
    it('return the sum of all numbers in an array', () => {
        let testArr = [1, 2, 3, 4, 5];
        expect(arithmetic.add(testArr).toEqual(15))
    })
})