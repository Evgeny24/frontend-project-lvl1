#!/usr/bin/env node

import {
  getUserName, gcdGame,
} from '../..';
import playGame from '../engine';

const randomMin = 1;
const randomMax = 100;

console.log('\nWelcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

playGame(gcdGame, randomMin, randomMax, userName);
