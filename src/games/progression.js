import playGame from '../engine';
import getRndInteger from '../common';

const min = 1;
const max = 50;
const len = 10;
const replacement = '..';
const message = 'What number is missing in the progression?';

const getData = () => {
  let currentItem = getRndInteger(min, max);
  const step = getRndInteger(min, len);
  const index = getRndInteger(0, len - 1);
  const correctAnswer = currentItem + index * step;
  let gameQuestion = '';
  for (let i = 0; i < len; i += 1) {
    gameQuestion = `${gameQuestion}${i === index ? replacement : currentItem} `;
    currentItem += step;
  }
  return [gameQuestion.trim(), correctAnswer.toString()];
};

const progressionGame = () => {
  playGame(message, getData);
};

export default progressionGame;
