#!/usr/bin/env node
import gameBody from '../../src/gameBody.js';
import brainCalcTask from '../game-tasks/brain-calc-task.js';

const description = 'What is the result of the expression?';

gameBody(description, brainCalcTask);
