#!/usr/bin/env node
import gameBody from '../../src/gameBody.js';
import brainPrimeTask from '../../src/game-tasks/brain-prime-task.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameBody(description, brainPrimeTask);
