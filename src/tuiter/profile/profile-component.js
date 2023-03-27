import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    console.log(profile)

    return (
        <div>
            <h4>Profile</h4>
            <div className='row col-12 container-fluid border m-0 p-0'>
                <img src={profile.bannerPic} className='img-fluid w-100 p-0'></img>
            </div>
            <div className='row'>
                <div className='col-4 container-fluid justify-content-start ps-0 ms-4'>
                    <img src={profile.profilePic} className='img-fluid rounded-circle position-absolute translate-middle-y' style={{ height: '10em' }}></img>
                </div>
                <div className='col-6 container-fluid d-flex justify-content-end m-0 pt-3'>
                    <Link to='/tuiter/edit-profile'>
                        <button type='button' className='btn btn-lg btn-light p-2 px-4 rounded-pill'>Edit Profile</button>
                    </Link>
                </div>
            </div>
            <div className='row container-fluid mt-4 ms-0 ps-1'>
                <h3 className='mb-0'><b>{profile.name}</b></h3>
                <p className='text-secondary'>@{profile.handle}</p>
                <p className='mb-2'>{profile.bio}</p>
                <p className='text-secondary mt-0 mb-2'><i className="fa-solid fa-location-dot"></i> {profile.location} &nbsp;&nbsp;&nbsp;
                    <i className="fa-solid fa-cake-candles"></i> Born {profile.dateOfBirth} &nbsp;&nbsp;&nbsp;
                    <i className="fa-regular fa-calendar-days"></i> Joined {profile.dateJoined}</p>
                <p><b>{profile.following}</b> Following &nbsp;&nbsp; <b>{profile.followers}</b> Followers</p>
            </div>

        </div>
    )
};

export default ProfileComponent;