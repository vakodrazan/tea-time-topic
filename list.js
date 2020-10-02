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
            // const dateSetUp = new Date(topic.discussedOn);
            
            // const day = dateSetUp.getDay();
            // const month = dateSetUp.getMonth();
            // const year = dateSetUp.getFullYear();
            // const dateDiscused = `${day} / ${month} / ${year}`;

            return `
            <article class="topicList" data-id="${topic.id}">
                <p>
                    ${topic.title}
                </p>
                <div class="voting">
                    <div>
                        <button class="upvote" aria-placeholder="upvote ${topic.title}" data-id="${topic.id}">
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

