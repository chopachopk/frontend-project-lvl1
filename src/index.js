import readlineSync from 'readline-sync';

import runEvenGame from '../games/even.js';
import runCalcGame from '../games/calc.js';
import runGcdGame from '../games/gcd.js';

export const GAME = {
  EVEN: 'even',
  CALC: 'calc',
  GCD: 'gcd',
};

const RULES = {
  [GAME.EVEN]: 'Answer "yes" if the number is even, otherwise answer "no".',
  [GAME.CALC]: 'What is the result of the expression?',
  [GAME.GCD]: 'Find the greatest common divisor of given numbers.',
};

const RUNNER = {
  [GAME.EVEN]: runEvenGame,
  [GAME.CALC]: runCalcGame,
  [GAME.GCD]: runGcdGame,
};

const STEPS_AMOUNT = 3;

const play = (game) => {
  for (let i = 0; i < STEPS_AMOUNT; i += 1) {
    const { question, correctAnswer } = RUNNER[game]();

    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer !== correctAnswer) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    console.log('Correct!');
  }

  return true;
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(RULES[game]);

  const isWin = play(game);
  console.log(`${isWin ? 'Congratulations' : 'Let\'s try again'}, ${name}!`);
};
