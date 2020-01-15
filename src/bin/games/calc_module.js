import playGame from '../../engine';
import getRndInteger from '../..';

const calcGame = () => {
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
        result = null;
    }
    return result;
  };

  const getRoundData = () => {
    const firstTerm = getRndInteger(min, max);
    const secondTerm = getRndInteger(min, firstTerm);
    const index = getRndInteger(0, operators.length - 1);
    const expression = `${firstTerm} ${operators[index]} ${secondTerm}`;
    const correctAnswer = calculate(firstTerm, secondTerm, operators[index]);
    return [expression, correctAnswer.toString()];
  };

  playGame(message, getRoundData);
};

export default calcGame;
