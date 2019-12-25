#!/usr/bin/env node

import {
  getUserName, calcGame,
} from '../..';
import playGame from '../engine';

const randomMin = 1;
const randomMax = 100;

console.log('\nWelcome to the Brain Games!');
console.log('What is the result of the expression?\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

playGame(calcGame, randomMin, randomMax, userName);
