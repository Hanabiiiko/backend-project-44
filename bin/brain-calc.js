#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'What is the result of the expression?';

const task = () => {
  const operand1 = Math.round(Math.random() * 10);
  const operand2 = Math.round(Math.random() * 10);

  const operator = ['+', '*', '-'];
  const indexOper = operator[Math.round(Math.random() * 2)];

  let answer = 0;

  switch (indexOper) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    default:
      answer = operand1 - operand2;
      break;
  }

  return [`${operand1} ${indexOper} ${operand2}`, answer]; // basicaly return [question, answer]
};

gameBody(description, task);
