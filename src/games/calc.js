import playGame from '../engine';
import getRndInteger from '../common';

const min = 1;
const max = 100;
const operators = ['+', '-', '*'];
const message = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return null;
  }
  return result;
};

const getData = () => {
  const firstTerm = getRndInteger(min, max);
  const secondTerm = getRndInteger(min, firstTerm);
  const index = getRndInteger(0, operators.length - 1);
  const gameQuestion = `${firstTerm} ${operators[index]} ${secondTerm}`;
  const correctAnswer = calculate(firstTerm, secondTerm, operators[index]);
  return [gameQuestion, correctAnswer.toString()];
};

const calcGame = () => {
  playGame(message, getData);
};

export default calcGame;
