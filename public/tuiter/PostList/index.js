import posts from './posts.js';
import postitem from './PostItem.js';

const PostList = () => {
    let s = '';
    for (let i = 0; i < posts.length; i++) {
        s += postitem(posts[i]);
    }
    return s;
}

export default PostList;