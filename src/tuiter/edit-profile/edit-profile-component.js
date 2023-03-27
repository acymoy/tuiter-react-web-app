import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProfile } from '../reducers/profile-reducer';


const EditProfileComponent = () => {
    const initialProfile = useSelector(state => state.profile);
    let [profile, setProfile] = useState(initialProfile);
    const dispatch = useDispatch();
    const profileClickHandler = () => {
        dispatch(updateProfile(profile));
    }

    const nameChangeHandler = (event) => {
        const newName = event.target.value;
        setProfile({
            ...profile,
            name: newName
        });

    }
    const bioChangeHandler = (event) => {
        const newBio = event.target.value;
        setProfile({
            ...profile,
            bio: newBio
        });
    }
    const locationChangeHandler = (event) => {
        const newLocation = event.target.value;
        setProfile({
            ...profile,
            location: newLocation
        });
    }
    const websiteChangeHandler = (event) => {
        const newWebsite = event.target.value;
        setProfile({
            ...profile,
            website: newWebsite
        });
    }
    const birthDateHandler = (event) => {
        const newBD = event.target.value;
        setProfile({
            ...profile,
            dateOfBirth: newBD
        });
    }

    return (
        <div>
            <h4><Link to='/tuiter/profile'><i className="fa-solid fa-x me-3 link-dark"></i></Link> Edit profile</h4>
            <div className='row col-12 container-fluid border m-0 p-0'>
                <img src={profile.bannerPic} className='img-fluid w-100 p-0'></img>
            </div>
            <div className='row'>
                <div className='col-4 container-fluid justify-content-start ps-0 ms-4'>
                    <img src={profile.profilePic} className='img-fluid rounded-circle position-absolute translate-middle-y' style={{ height: '10em' }}></img>
                </div>
                <div className='col-6 container-fluid d-flex justify-content-end m-0 pt-3'>
                    <Link to='/tuiter/profile'>
                        <button type='button' className='btn btn-lg btn-light p-2 px-4 rounded-pill' onClick = {profileClickHandler}>Save</button>
                    </Link>
                </div>
            </div>
            <div className='row container-fluid mt-4 ms-0 ps-1'>
                <input type='name' className='form-control mb-3' id='name' placeholder='Name' value={profile.name} onChange={nameChangeHandler} />
                <textarea value={profile.bio} placeholder="Bio"
                    className="form-control mb-2" rows="4"
                    onChange={bioChangeHandler}>
                </textarea>
                <input type='location' className='form-control mb-3' id='location' placeholder='Location' value={profile.location}
                    onChange={locationChangeHandler} />
                <input type='website' className='form-control mb-3' id='website' placeholder='Website' value={profile.website}
                    onChange={websiteChangeHandler} />
                <input type='dob' className='form-control mb-3' id='dob' placeholder='Birthday' value={profile.dateOfBirth}
                    onChange={birthDateHandler} />
            </div>

        </div>
    );
}

export default EditProfileComponent;