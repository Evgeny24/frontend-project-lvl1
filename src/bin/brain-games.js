#!/usr/bin/env node

import { getUserName } from '..';

console.log('\nWelcome to the Brain Games!');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);
