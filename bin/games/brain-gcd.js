#!/usr/bin/env node
import gameBody from '../../src/gameBody.js';
import brainGcdTask from '../game-tasks/brain-gcd-task.js';

const description = 'Find the greatest common divisor of given numbers.';

gameBody(description, brainGcdTask);
