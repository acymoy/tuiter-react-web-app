import React from 'react';

const TuitAttachment = (tuit) => {
    return (
        <div className='row container-fluid border p-0 rounded-top rounded-3 align-items-start'>
            <img src={tuit.post.image} className='img-fluid ' />
            <p className='m-0'>{tuit.post.mediaTitle}</p>
            <p className='text-secondary'>{tuit.post.mediaDescription}</p>
        </div>
    )
}

export default TuitAttachment;