#!/usr/bin/env node
import gameBody from '../../src/gameBody.js';
import brainProgTask from '../game-tasks/brain-prog-task.js';

const description = 'What number is missing in the progression?';

gameBody(description, brainProgTask);
