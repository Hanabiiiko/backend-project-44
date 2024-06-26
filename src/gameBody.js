import readlineSync from 'readline-sync';
import cli from './cli.js';

const gameBody = (decription, taskFunc) => {
  const playerName = cli(); // Приветсиве
  console.log(decription); // Описание игры

  let mark = 0; // Маркер для проверки победы
  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunc();

    console.log(`Question: ${step[0]}`);
    const answer = readlineSync.question('Answer: ');

    if (answer == step[1]) { // eslint-disable-line
      console.log('Correct!');
      mark += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]} .`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (mark === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default gameBody;
