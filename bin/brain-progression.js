#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'What number is missing in the progression?';

const task = () => {
  const progression = [];

  const randomAdd = (Math.round(Math.random() * 4) + 1);
  const randomProgIndex = Math.round(Math.random() * 9);
  let answer;
  let mark = 0;

  for (let i = 0; i <= 10; i += 1) {
    mark += randomAdd;
    if (i === randomProgIndex) {
      answer = mark;
      progression.push('..');
    } else {
      progression.push(mark);
    }
  }

  return [progression.join(' '), answer];
};

gameBody(description, task);
