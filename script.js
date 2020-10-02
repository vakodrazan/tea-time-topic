// Import from file module
import { showList } from './list.js';
import { form } from './elements.js';
import { addNewTopic } from './elements.js';

// let topic = [];


showList();
form.addEventListener('submit', addNewTopic);