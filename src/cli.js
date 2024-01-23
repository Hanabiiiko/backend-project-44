import readlineSync from 'readline-sync';

export function cli() {
let name = readlineSync.question('May I have your name? ');
console.log('Hello! ' + name);
}
