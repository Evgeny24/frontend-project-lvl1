import playGame from '../engine';
import getRndInteger from '../common';

const min = 1;
const max = 1000;
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) { return false; }
  let divisor = 2;
  while ((divisor ** 2 <= num) && (num % divisor !== 0)) {
    divisor += 1;
  }
  return divisor ** 2 > num;
};

const getData = () => {
  const gameQuestion = getRndInteger(min, max);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const primeGame = () => {
  playGame(message, getData);
};

export default primeGame;
