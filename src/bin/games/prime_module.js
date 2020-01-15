import playGame from '../../engine';
import getRndInteger from '../..';

const primeGame = () => {
  const min = 1;
  const max = 1000;
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (num) => {
    let divisor = 2;
    while ((divisor ** 2 <= num) && (num % divisor !== 0)) {
      divisor += 1;
    }
    return divisor ** 2 > num;
  };

  const getRoundData = () => {
    const numberToAsk = getRndInteger(min, max);
    const correctAnswer = isPrime(numberToAsk) ? 'yes' : 'no';
    return [numberToAsk, correctAnswer];
  };

  playGame(message, getRoundData);
};

export default primeGame;
