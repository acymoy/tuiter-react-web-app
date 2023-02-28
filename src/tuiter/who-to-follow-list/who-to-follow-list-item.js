import React from "react";

const WhoToFollowListItem = ({
    who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png' }
}) => {
    return (
    <li className = 'list-group-item container-fluid bg-light border-0 d-flex'>
        <div className='col-1'>
            <img src={who.avatarIcon} className='rounded-circle img-fluid' />
        </div>
        <div className='col-6 align-self-center ps-2'>
            <p className='my-0 h6 text-nowrap'><b>{who.userName}</b> <span className='fa-stack fa-2xs'><i className="fa-solid fa-certificate fa-stack-2x" style={{'color': '#0d9bf0'}}></i><i className="fa-solid fa-check fa-stack-1x" style={{"color": "white"}}></i></span></p>
            <p className='text-secondary h6'>@{who.handle}</p>
        </div>
        <div className='col-3 align-self-center ms-auto'>
            <button type='button' className='btn rounded-pill btn-primary text-white'><b>Follow</b></button>
        </div>
    </li>

    )
}
export default WhoToFollowListItem;