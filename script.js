// Import from file module
import { showList } from './list.js';
import { form, list } from './elements.js';
import { addNewTopic } from './elements.js';
import { scoreVoted } from './votedScore.js';
import { init } from './localStorage.js';
// let topic = [];

showList();
form.addEventListener('submit', addNewTopic);
list.addEventListener('click', scoreVoted);
init();