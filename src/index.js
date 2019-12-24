#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gcd = (a, b) => {
  if (a === 0) { return b; }
  if (b === 0) { return a; }
  return gcd(b, a % b);
};

export const evenGame = (min, max) => {
  const number = getRndInteger(min, max);
  const userAnswer = readlineSync.question(`Question: ${number} `);
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [userAnswer, trueAnswer];
};

export const calcGame = (min, max) => {
  const operator = ['+', '-', '*'];
  const number1 = getRndInteger(min, max);
  const number2 = getRndInteger(min, number1);
  const index = getRndInteger(0, operator.length - 1);
  const expression = `${number1} ${operator[index]} ${number2}`;
  console.log(`Question: ${expression}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const trueAnswer = eval(expression);
  return [userAnswer, trueAnswer];
};

export const gcdGame = (min, max) => {
  const number1 = getRndInteger(min, max);
  const number2 = getRndInteger(min, max);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const trueAnswer = gcd(number1, number2);
  return [userAnswer, trueAnswer];
};

export const progressionGame = (min, max1) => {
  const len = 10;
  const start = getRndInteger(min, max1);
  const step = getRndInteger(min, len);
  const index = getRndInteger(0, len - 1);
  const arr = [start];
  for (let i = 0; i < len - 1; i += 1) {
    arr.push(arr[arr.length - 1] + step);
  }
  const trueAnswer = arr[index];
  arr[index] = '..';
  let expression = 'Question: ';
  for (let i = 0; i < arr.length; i += 1) {
    expression += `${arr[i]} `;
  }
  console.log(expression);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  return [userAnswer, trueAnswer];
};

export const primeGame = (min, max) => {
  const number = getRndInteger(min, max);
  let trueAnswer = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      trueAnswer = 'no';
      break;
    }
  }
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return [userAnswer, trueAnswer];
};

export const playGame = (getData, min, max, userName) => {
  let i = 0;
  while (i < 3) {
    const data = getData(min, max);
    const userAnswer = data[0];
    const trueAnswer = data[1];
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      break;
    }
  }
  const finalMessage = (i === 3 ? 'Congratulations' : 'Let\'s try again');
  console.log(`${finalMessage}, ${userName}!\n`);
};
