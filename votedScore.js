import fetching from './fetchData.js';
// Named export for the voting
export const scoreVoted = (e, topic) => {
    if (e.target.closest('button.upvote')) {
        const article = e.target.closest('article.topicList');
        const id = article.dataset.id;
        upvoteScore(id)
    }
}

const upvoteScore = async (id) => {
    
    const fetchedData = await fetching();
    const filtering = fetchedData.filter(data => data.id !== id);
    
    const upvoting = filtering.reduce((acc, vote) => {
        if (acc[vote.upvote]) {
            acc[vote.upvote]++;
        }
    });
}
