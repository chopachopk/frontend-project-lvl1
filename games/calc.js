import { getRandomNumberInLimit } from '../src/get-random-number-in-limit.js';

const MAX_NUMBER = 10;
const OPERATIONS = ['+', '-', '*'];

export default () => {
  const firstNumber = getRandomNumberInLimit(MAX_NUMBER);
  const secondNumber = getRandomNumberInLimit(MAX_NUMBER);
  const operation = OPERATIONS[getRandomNumberInLimit(OPERATIONS.length)];

  const question = `${firstNumber} ${operation} ${secondNumber}`;

  let result = '';

  switch (operation) {
    case OPERATIONS[0]:
      result = firstNumber + secondNumber;
      break;

    case OPERATIONS[1]:
      result = firstNumber - secondNumber;
      break;

    default:
      result = firstNumber * secondNumber;
  }

  return { question, correctAnswer: result.toString() };
};
