import fetching from './fetchData.js';
import { showList } from './list.js';
    
export const init = async () => {
    let topic = await fetching();
    const topicString = localStorage.getItem(topic);
    const lsItems = JSON.parse(topicString);
    if (lsItems) {
        topic = lsItems;
    }
    showList();
    updateLocalStorage(topic);
    return topic;

}


const updateLocalStorage = topic => {
    console.log(topic);
	localStorage.setItem('topic', JSON.stringify(topic));
};