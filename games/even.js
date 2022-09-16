import { getRandomNumberInLimit } from '../src/get-random-number-in-limit.js';

const MAX_NUMBER = 1000;

export default () => {
  const number = getRandomNumberInLimit(MAX_NUMBER);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { question: number, correctAnswer };
};
