import React, { useEffect } from "react";
import TuitStats from "./tuit-stats";
import { useSelector, useDispatch } from "react-redux";
import { clickLike } from "../reducers/tuits-reducer";
import { deleteTuitThunk } from "../../services/tuits-thunks";

import { findTuitsThunk } from "../../services/tuits-thunks";
import { useState } from "react";

const Tuits = () => {
    const { tuits, loading } = useSelector(state => state.tuitsData);
    console.log(tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    const clickLikeHandler = (id) => {
        dispatch(clickLike(id))
    }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id))
    }
    return (
        tuits.map((tuit, index) =>
            <div className='d-flex pt-3 pb-3 mb-0 border-bottom'>
                <div className='d-flex col-2 align-items-start pe-3'>
                    <img src={tuit.userProfile}
                        className="img-fluid rounded-circle" />
                </div>
                <div className='col-10 ps-2 container-fluid align-items-start'>
                    <div className='row col-12 container-fluid'>
                        <p className='m-0'><b className=''>{tuit.username} <span className='fa-stack fa-2xs'>
                            <i className="fa-solid fa-certificate fa-stack-2x" style={{ "color": "#0d9bf0" }}></i>
                            <i className="fa-solid fa-check fa-stack-1x" style={{ "color": "white" }}></i></span></b>
                            &nbsp;&nbsp;<span className='text-secondary'>@{tuit.handle} &#x2022; {tuit.time}</span>
                            <i className="fa-solid fa-x float-end" onClick={() => deleteTuitHandler(tuit._id)}></i></p>

                        <p className=''>{tuit.tuit}</p>
                    </div>
                    <div className='row container-fluid border p-0 rounded-top rounded-3 align-items-start'>
                        <img src={tuit.image} className='img-fluid ' />
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