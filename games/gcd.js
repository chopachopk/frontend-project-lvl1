import { getRandomNumberInLimit } from '../src/get-random-number-in-limit.js';

const MAX_NUMBER = 10;

const findGcd = (x, y) => (!y ? x : findGcd(y, x % y));

export default () => {
  const firstNumber = getRandomNumberInLimit(MAX_NUMBER);
  const secondNumber = getRandomNumberInLimit(MAX_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;

  const gcd = findGcd(firstNumber, secondNumber);

  return { question, correctAnswer: gcd.toString() };
};
