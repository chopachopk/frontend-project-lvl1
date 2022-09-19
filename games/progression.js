import { getRandomNumberInLimit } from '../src/get-random-number-in-limit.js';

const MAX_NUMBER = 10;

const PROGRESSION_STEP = {
  MIN: 2,
  MAX: 10,
};

const PROGRESSION_LENGTH = 7;

const createProgressionArray = (firstElement, step) => {
  const result = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const number = result[result.length - 1] ?? firstElement;
    result.push(number + step);
  }

  return result;
};

export default () => {
  const firstNumber = getRandomNumberInLimit(MAX_NUMBER);
  const progressionStep = getRandomNumberInLimit(PROGRESSION_STEP.MAX, PROGRESSION_STEP.MIN);
  const emptyIndex = getRandomNumberInLimit(PROGRESSION_LENGTH);
  const progressionArray = createProgressionArray(firstNumber, progressionStep);

  const correctAnswer = progressionArray[emptyIndex].toString();
  const question = progressionArray.join(' ').replace(correctAnswer, '..');

  return { question, correctAnswer };
};
