import playGame from '../engine';
import getRndInteger from '../common';

const min = 1;
const max = 100;
const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const gameQuestion = getRndInteger(min, max);
  const correctAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const evenGame = () => {
  playGame(message, getData);
};

export default evenGame;
