'use strict';

let arithmetic = module.exports = {};

arithmetic.isValidInput = function (numbersArray) {
  if (Array.isArray(numbersArray)) {
    return numbersArray.every((arrayElement) => typeof arrayElement === 'number')
  } else {
    return false;
  }
};

arithmetic.add = function (numbersArray) {
  if (!arithmetic.isValidInput(numbersArray)) {
    return 'invalid input';
  }
  return numbersArray.reduce((acc, cur) => acc + cur, 0);
};

arithmetic.multiply = function (numbersArray) {
  if (!arithmetic.isValidInput(numbersArray)) {
    return 'invalid input';
  }
  return numbersArray.reduce((acc, cur) => acc * cur)
};

arithmetic.subtract = function (numbersArray) {
  if (!arithmetic.isValidInput(numbersArray)) {
    return 'invalid input';
  }
  return numbersArray.reduce((acc, cur) => acc - cur)
};

arithmetic.divide = function (numbersArray) {
  if (!arithmetic.isValidInput(numbersArray)) {
    return 'invalid input';
  }
  let quotient = numbersArray.reduce((acc, cur) => {
    if (cur !== 0) {
      return parseFloat((acc / cur).toFixed(3)); //limits return to 3 decimal places
    } else if (cur === 0) {
      return `cant't divide by zero!`;
    }
  })
  return quotient;
};

