#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const task = () => {
  const q = Math.round(Math.random() * 23);
  const a = isPrime(q) ? 'yes' : 'no';
  return [q, a];
};

gameBody(description, task);
