import { getRandomNumberInLimit } from '../src/get-random-number-in-limit.js';

const NUMBER = {
  MIN: 2,
  MAX: 10,
};

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const number = getRandomNumberInLimit(NUMBER.MAX, NUMBER.MIN);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question: number, correctAnswer };
};
