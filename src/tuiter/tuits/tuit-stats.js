import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTuitThunk } from '../../services/tuits-thunks';
import { clickLike } from '../reducers/tuits-reducer';

const TuitStats = (post) => {
    const dispatch = useDispatch();
    const clickLikeHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
        }))
    }
    //console.log(post.post)
    //console.log(JSON.stringify(post))
    const heartIcon = post.post.liked ? `fa fa-heart` : `fa-regular fa-heart`;
    const heartStyle = post.post.liked ? {color: '#f91880'} : {};
    
    return (
        <div className='row pt-2 d-flex'>
            <div className='col'>
                <i className="fa-regular fa-comment"></i><span className='ps-3'> {post.post.replies}</span>
            </div>
            <div className='col'>
                <i className="fa-solid fa-retweet"></i><span className='ps-3'> {post.post.retuits}</span>
            </div>
            <div className='col'>
                <i className={heartIcon} style = {heartStyle} onClick = {() => clickLikeHandler(post)}></i><span className='ps-3'> {post.post.likes}</span>
            </div>
            <div className='col'>
                <i className="fa-solid fa-arrow-up-from-bracket"></i><span className=''></span>
            </div>
        </div>
    )
}

export default TuitStats