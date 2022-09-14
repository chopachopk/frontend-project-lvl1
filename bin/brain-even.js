#!/usr/bin/env node

import readlineSync from 'readline-sync';

const STEPS_AMOUNT = 3;
const MAX_NUMBER = 1000;

function playEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < STEPS_AMOUNT; i += 1) {
    const number = Math.floor(Math.random() * MAX_NUMBER);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer !== correctAnswer) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    console.log('Correct!');
  }

  return true;
}

function brainEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const isUsersWin = playEven();

  if (isUsersWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

brainEven();
