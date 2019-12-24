#!/usr/bin/env node

import {
  getUserName, primeGame, playGame,
} from '..';

const randomMin = 1;
const randomMax = 1000;

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

playGame(primeGame, randomMin, randomMax, userName);
