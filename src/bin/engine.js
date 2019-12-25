#!/usr/bin/env node

const playGame = (getData, min, max, userName) => {
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

export default playGame;
