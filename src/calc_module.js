import playGame from './engine';
import getRndInteger from '.';

const calcGame = () => {
  const message = 'What is the result of the expression?';

  const calculate = (number1, number2, operator) => {
    let result = number1 + number2;
    if (operator === '-') { result = number1 - number2; }
    if (operator === '*') { result = number1 * number2; }
    return result;
  };

  const getRoundData = () => {
    const min = 1;
    const max = 100;
    const operator = ['+', '-', '*'];
    const number1 = getRndInteger(min, max);
    const number2 = getRndInteger(min, number1);
    const index = getRndInteger(0, operator.length - 1);
    const expression = `${number1} ${operator[index]} ${number2}`;
    const correctAnswer = calculate(number1, number2, operator[index]);
    return [expression, `${correctAnswer}`];
  };

  playGame(message, getRoundData);
};

export default calcGame;
