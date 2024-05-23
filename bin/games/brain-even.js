#!/usr/bin/env node
import gameBody from '../../src/gameBody.js';
import brainEvenTask from '../../src/game-tasks/brain-even-task.js';

const decription = 'Answer "yes" if the number is even, otherwise answer "no".';

gameBody(decription, brainEvenTask);
