import React from "react";
import TuitStats from "./tuit-stats";
import { useSelector, useDispatch } from "react-redux";
import { clickLike, deleteTuit } from "../reducers/tuits-reducer";
import { useState } from "react";

const Tuits = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const clickLikeHandler = (id) => {
        dispatch(clickLike(id))
    }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id))
    }
    return (
        tuits.map((tuit, index) =>
            <div className='container-fluid d-flex pt-3 pb-3 mb-0 border-bottom'>
                <div className='d-flex col-2 align-items-start pe-3'>
                    <img src={tuit.userProfile}
                        className="img-fluid rounded-circle" />
                </div>
                <div className='col-11 ps-2 container-fluid align-items-start'>
                    <div className='row col-12 container-fluid'>
                        <p className='m-0'><b className=''>{tuit.userName} <span className='fa-stack fa-2xs'>
                            <i className="fa-solid fa-certificate fa-stack-2x" style={{ "color": "#0d9bf0" }}></i>
                            <i className="fa-solid fa-check fa-stack-1x" style={{ "color": "white" }}></i></span></b>
                            &nbsp;&nbsp;<span className='text-secondary'>@{tuit.handle} &#x2022; {tuit.time}</span>
                            <i class="fa-solid fa-x float-end" onClick = {() => deleteTuitHandler(tuit._id)}></i></p>

                        <p className=''>{tuit.text}</p>
                    </div>
                    <div className='row container-fluid border p-0 rounded-top rounded-3 align-items-start'>
                        <img src={tuit.mediaThumbnail} className='img-fluid ' />
                        <p className='m-0'>{tuit.mediaTitle}</p>
                        <p className='text-secondary'>{tuit.mediaDescription}</p>
                    </div>
                    <TuitStats post={tuit} />
                </div>
            </div>
        )
    )
}

export default Tuits;


/*
const Tweet = ({post = {
    "userProfile": "",
    "userName": "undefined",
    "handle": "undefined",
    "time": "24h",
    "text": "insert tuiter text here.",
    "mediaTitle": "media title",
    "mediaDescription": "media description",
    "mediaThumbnail": "image.png",
    "comments": 1,
    "shares": 1,
    "likes": 1,
    "liked": true
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
                <TuitStats post = {post}/>
            </div>
        </div>
        
    )
}
export default Tweet;

*/