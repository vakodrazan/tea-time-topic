import fetching from './fetchData.js';
import { list } from './elements.js';
import { 
    upvote,
    downvote,
    archive 
} from './svg.js'

// Named export

export const showList  = async topics => {
    let fetchedData = await fetching();
    topics = fetchedData;
    let sortingList  = topics.sort((a, b) => {
        const sortVotedA = a.upvotes - a.downvotes;
        const sortVotedB = b.upvotes - b.downvotes;
        return sortVotedB - sortVotedA;
    });

    let html = sortingList
        .map(topic => {
            
            return `
            <article>
                <p>
                    ${topic.title}
                </p>
                <div class="voting">
                    <div>
                        <button aria-placeholder="upvote ${topic.title}" data-id="${topic.id}">
                            ${upvote}
                        </button>
                        <span>
                            ${topic.upvotes}
                        </span>
                    </div>
                    <div>
                        <button aria-placeholder="downvote ${topic.title}" data-id="${topic.id}">
                            ${downvote}
                        </button>
                        <span>
                            ${topic.downvotes}
                        </span>
                    </div>
                </div>
                <button class="archived">
                    ${archive}
                </button>
            </article>
            `
        })
        .join("");
        list.innerHTML = html;
}
 
// const updateVoting = e => {
// 	if (e.target.closest('')) {

//     }
// }

// const upvoted = fetchedData.reduce((acc, votes) => {
//     if (acc[votes.upvotes]) {
//         acc[votes.upvotes]++;
//     } else {
//         acc[votes.upvotes] = 1;
//     }
//     return acc;
// }, {});
// console.log(upvoted);
