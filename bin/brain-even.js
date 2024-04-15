#!/usr/bin/env node
// import readlineSync from 'readline-sync';
// import cli from '../src/cli.js';
import gameBody from '../src/gameBody.js';

// const userName = cli();

const decription = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = () => {
    const q = Math.round(Math.random() * 100);
    // const a = q % 2; // Вернет 1 если нечет и вернет 0 если чет
    let a = '';
    if (q % 2 === 0) {
        a = 'yes';
    } else {
        a = 'no';
    }
    return [q, a];
};

gameBody(decription, task);