import fetching from './fetchData.js';

export const addNewTopic = async e => {
    e.preventDefault();
    let fetchedData = await fetching();
    const newTopic = {
        id: Date.now(),
        upvotes: 0,
        title: e.target.topic.value,
        downvotes: 0,
        discussedOn: ""
    }

    fetchedData.push(newTopic);
    // console.log(topic);
    showList(fetchedData);
}
