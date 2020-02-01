import playGame from '../engine';
import getRndInteger from '../common';

const min = 1;
const max = 100;
const message = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0) { return b; }
  if (b === 0) { return a; }
  return gcd(b, a % b);
};

const getData = () => {
  const firstNumber = getRndInteger(min, max);
  const secondNumber = getRndInteger(min, max);
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber);
  return [gameQuestion, correctAnswer.toString()];
};

const gcdGame = () => {
  playGame(message, getData);
};

export default gcdGame;
