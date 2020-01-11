import readlineSync from 'readline-sync';

const playGame = (message, getData) => {
  console.log('\nWelcome to the Brain Games!');
  if (message !== '') { console.log(`${message}`); }

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  if (message === '') { return; }

  let i = 0;
  while (i < 3) {
    const data = getData();
    const expression = data[0];
    const correctAnswer = data[1];

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`\n${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      break;
    }
  }

  const finalMessage = (i === 3 ? 'Congratulations' : 'Let\'s try again');
  console.log(`${finalMessage}, ${userName}!\n`);
};

export default playGame;
