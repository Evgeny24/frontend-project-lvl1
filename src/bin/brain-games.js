#!/usr/bin/env node

import getUserName from '..';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
const greet = `Hello, ${userName}!`;
console.log(greet);
