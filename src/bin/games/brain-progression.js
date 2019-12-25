#!/usr/bin/env node

import {
  getUserName, progressionGame,
} from '../..';
import playGame from '../engine';

const randomMin = 1;
const randomMax = 50;

console.log('\nWelcome to the Brain Games!');
console.log('What number is missing in the progression?\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

playGame(progressionGame, randomMin, randomMax, userName);
