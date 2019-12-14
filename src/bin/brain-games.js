#!/usr/bin/env node

import {
  getUserName, getRndInteger, isEven, getAnswer,
} from '..';

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

let i = 0;
while (i < 3) {
  const number = getRndInteger(1, 100);
  const answer = getAnswer(number);
  if ((answer === 'yes' && isEven(number)) || (answer === 'no' && !isEven(number))) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(number) ? 'yes' : 'no'}.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

console.log(`Congratulations, ${userName}!\n`);
