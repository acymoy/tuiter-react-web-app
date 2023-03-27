import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
    name: 'Andrew Moy', handle: 'andrewmoy',
    profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', 
    bannerPic: 'https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg',
    bio: 'Your profile description goes here.',
    website: 'www.google.com',
    location: 'Boston, MA', dateOfBirth: '08/21/1998', dateJoined: '07/2012',
    following: 210, followers: 591,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        updateProfile(state, action) {
            state = action.payload;
            return state;
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;