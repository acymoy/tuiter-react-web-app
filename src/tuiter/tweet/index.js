import React from "react";

const Tweet = ({post = {
    "userProfile": "",
    "userName": "undefined",
    "handle": "undefined",
    "time": "24h",
    "text": "insert tuiter text here.",
    "mediaTitle": "media title",
    "mediaDescription": "media description",
    "comments": "1",
    "shares": "1",
    "likes": "1"
}}) => {
    return (
        <div className='container-fluid d-flex pt-1 pb-3 mb-0 border-bottom'>
            <div className='d-flex col-2 align-items-start pe-3'>
                <img src={post.userProfile}
                    className="img-fluid rounded-circle" />
            </div>
            <div className='col-11 ps-2 container-fluid align-items-start'>
                <div className='row col-12 container-fluid'>
                    <p className='m-0'><b className=''>{post.userName} <span className='fa-stack fa-2xs'><i className="fa-solid fa-certificate fa-stack-2x" style={{"color": "#0d9bf0"}}></i><i className="fa-solid fa-check fa-stack-1x" style={{"color": "white"}}></i></span></b>
                        <span className='text-secondary'>@{post.handle} &#x2022; {post.time}</span></p>
                    <p className=''>{post.text}</p>
                </div>
                <div className='row container-fluid border p-0 rounded-top rounded-3 align-items-start'>
                    <img src={post.mediaThumbnail} className='img-fluid ' />
                    <p className='m-0'>{post.mediaTitle}</p>
                    <p className='text-secondary'>{post.mediaDescription}</p>
                </div>
                <div className='row pt-2 d-flex'>
                    <div className='col'>
                        <i className="fa-regular fa-comment text-secondary"></i><span className='ps-3'> {post.comments}</span>
                    </div>
                    <div className='col'>
                        <i className="fa-solid fa-retweet"></i><span className='ps-3'> {post.shares}</span>
                    </div>
                    <div className='col'>
                        <i className="fa-regular fa-heart"></i><span className='ps-3'> {post.likes}</span>
                    </div>
                    <div className='col'>
                        <i className="fa-solid fa-arrow-up-from-bracket"></i><span className=''></span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Tweet;