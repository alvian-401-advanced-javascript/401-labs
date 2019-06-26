'use strict';

let arithmetic = module.exports = { };

arithmetic.isValidInput = function (numbersArray) {
  if (Array.isArray(numbersArray)) {
    return numbersArray.every((arrayElement) => typeof arrayElement === 'number')
  } else {
    return false;
  }
};

const { isValidInput } = arithmetic;

arithmetic.add = function (numbersArray) {
  if (!isValidInput(numbersArray)) {
    return 'invalid input';
  }
  return numbersArray.reduce((acc, cur) => acc + cur)
};

arithmetic.multiply = function (numbersArray) {
  if (!isValidInput(numbersArray)) {
    return 'invalid input';
  }
  return numbersArray.reduce((acc, cur) => acc * cur)
};

arithmetic.subtract = function (numbersArray) {
  if (!isValidInput(numbersArray)) {
    return 'invalid input';
  }
  return numbersArray.reduce((acc, cur) => acc - cur)
};

arithmetic.divide = function (numbersArray) {
  if (!isValidInput(numbersArray)) {
    return 'invalid input';
  }
  let quotient = numbersArray.reduce((acc, cur) => {
    if (cur !== 0) {
      return acc / cur;
    } else if (cur === 0) {
      return `cant't divide by zero!`;
    }
  })
  return quotient;
};

