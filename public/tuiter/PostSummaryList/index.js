import PostSummaryItem from './PostSummaryItem.js';
import exploreItems from './posts.js';

const PostSummaryList = () => {
    let s = '';
    s += `<div class = 'list-group mt-1 pt-1 mb-1 bg-light border-0'>`;
    for (let i = 0; i < exploreItems.length; i++) {
        s += PostSummaryItem(exploreItems[i]);
    }
    s += `</div>`;
    return s;
}

export default PostSummaryList;




