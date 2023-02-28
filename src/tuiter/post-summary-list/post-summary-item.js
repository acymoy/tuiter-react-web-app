import React from "react";

const PostSummaryItem = ({ post = {
    "topic": 'Web Development',
    "userName": 'ReactJS',
    "time": '2h',
    "title": 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
    "image": 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png'
}
}) => {
    return (
    <div className='row mx-1 my-1' >
        <div className='col-10 my-auto'>
            <p className='text-secondary my-0'> {post.topic}</p>
            <p className='my-0'><b>{post.userName}</b> <i className=" fa-solid fa-circle-check fa-xs"></i> &#x2022; <span className='text-secondary'>{post.time}</span></p>
            <p><b className='text-secondary'>{post.title}</b></p>
        </div>
        <div className='col-2 my-auto'>
            <img src={post.image}
                className='img-fluid rounded-3' />
        </div>
    </div >
)};

export default PostSummaryItem;