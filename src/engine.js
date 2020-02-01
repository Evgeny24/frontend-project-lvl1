import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const playGame = (message, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [gameQuestion, correctAnswer] = getData();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === numberOfRounds) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}.`);
      break;
    }
  }
};

export default playGame;
