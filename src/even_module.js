import playGame from './engine';
import getRndInteger from '.';

const evenGame = () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRoundData = (min = 1, max = 100) => {
    const number = getRndInteger(min, max);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return [number, correctAnswer];
  };

  playGame(message, getRoundData);
};

export default evenGame;
