import playGame from './engine';
import getRndInteger from '.';

const progressionGame = () => {
  const message = 'What number is missing in the progression?';

  const getRoundData = () => {
    const min = 1;
    const max = 50;
    const len = 10;
    let currentItem = getRndInteger(min, max);
    const step = getRndInteger(min, len);
    const index = getRndInteger(0, len - 1);
    const correctAnswer = currentItem + index * step;
    let expression = '';
    for (let i = 0; i < len; i += 1) {
      expression += (i === index ? '.. ' : `${currentItem} `);
      currentItem += step;
    }
    return [expression, `${correctAnswer}`];
  };

  playGame(message, getRoundData);
};

export default progressionGame;
