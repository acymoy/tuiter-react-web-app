import React, { useState } from 'react';
import { createTuitThunk } from '../../services/tuits-thunks';
import { useDispatch } from 'react-redux';


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const profilePic = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    const tuitClickHandler = () => {
        const newTuit = {
            username: "It's You",
            handle: "you",
            userProfile: profilePic,
            time: 'now',
            tuit: whatsHappening,
            attachment: false
        }
        dispatch(createTuitThunk(newTuit))
    }
    return (
        <div className="row pt-4">
            <div className="col-auto">
                <img src={profilePic} width={60} className = 'rounded-circle'/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                    className="form-control mb-2" rows = "4"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-4">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr /></div>
        </div>
    );
}

export default WhatsHappening;