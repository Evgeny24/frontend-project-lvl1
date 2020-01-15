import playGame from '../../engine';
import getRndInteger from '../..';

const evenGame = () => {
  const min = 1;
  const max = 100;
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRoundData = () => {
    const numberToAsk = getRndInteger(min, max);
    const correctAnswer = numberToAsk % 2 === 0 ? 'yes' : 'no';
    return [numberToAsk, correctAnswer];
  };

  playGame(message, getRoundData);
};

export default evenGame;
