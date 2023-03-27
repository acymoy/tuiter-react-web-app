import React from "react";
import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json";
import { useSelector } from "react-redux";


const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return (
        <div className = 'list-group mt-1 pt-1 mb-1 bg-light border-0'>
            {postsArray.map(x => <PostSummaryItem key = {x._id} post = {x}/>)}
        </div>
    )
};
export default PostSummaryList;

