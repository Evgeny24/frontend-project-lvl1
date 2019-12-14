#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = (number) => number % 2 === 0;

export const getAnswer = (number) => {
  const answer = readlineSync.question(`Question: ${number} `);
  return answer;
};
