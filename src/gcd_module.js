import playGame from './engine';
import getRndInteger from '.';

const gcdGame = () => {
  const message = 'Find the greatest common divisor of given numbers.';

  const gcd = (a, b) => {
    if (a === 0) { return b; }
    if (b === 0) { return a; }
    return gcd(b, a % b);
  };

  const getRoundData = () => {
    const min = 1;
    const max = 100;
    const number1 = getRndInteger(min, max);
    const number2 = getRndInteger(min, max);
    const expression = `${number1} ${number2}`;
    const correctAnswer = gcd(number1, number2);
    return [expression, `${correctAnswer}`];
  };

  playGame(message, getRoundData);
};

export default gcdGame;
