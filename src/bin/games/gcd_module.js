import playGame from '../../engine';
import getRndInteger from '../..';

const gcdGame = () => {
  const min = 1;
  const max = 100;
  const message = 'Find the greatest common divisor of given numbers.';

  const gcd = (a, b) => {
    if (a === 0) { return b; }
    if (b === 0) { return a; }
    return gcd(b, a % b);
  };

  const getRoundData = () => {
    const firstNumber = getRndInteger(min, max);
    const secondNumber = getRndInteger(min, max);
    const expression = `${firstNumber} ${secondNumber}`;
    const correctAnswer = gcd(firstNumber, secondNumber);
    return [expression, correctAnswer.toString()];
  };

  playGame(message, getRoundData);
};

export default gcdGame;
