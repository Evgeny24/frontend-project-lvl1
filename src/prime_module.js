import playGame from './engine';
import getRndInteger from '.';

const primeGame = () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getRoundData = () => {
    const min = 1;
    const max = 1000;
    const number = getRndInteger(min, max);
    let correctAnswer = 'yes';
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        correctAnswer = 'no';
        break;
      }
    }
    return [number, correctAnswer];
  };

  playGame(message, getRoundData);
};

export default primeGame;
