import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tweets.json';

// https://rb.gy/qrcpap

const currentUser = {
    'userName': 'Me Myself',
    'handle': 'itsme',
    'userProfile': 'https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png'
};

const templateTuit = {
    ...currentUser,
    'topic': 'Space',
    'time': '2h',
    'liked': false,
    'replies': 0,
    'likes': 0,
    'shares': 0,
    'comments': 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        clickLike(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.likes = tuit.liked ? tuit.likes -= 1 : tuit.likes += 1;
            tuit.liked = !tuit.liked;
        },
        createTuit(state, action) {
            console.log(action.payload)
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },

    }
});

export const { clickLike, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;