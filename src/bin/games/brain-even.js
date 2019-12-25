#!/usr/bin/env node

import {
  getUserName, evenGame,
} from '../..';
import playGame from '../engine';

const randomMin = 1;
const randomMax = 100;

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

playGame(evenGame, randomMin, randomMax, userName);
