import { createSlice } from "@reduxjs/toolkit";
import posts from '../data/posts.json';

const postSummarySlice = createSlice({
    name: 'posts',
    initialState: posts,
    reducers: {}
}
)

export default postSummarySlice.reducer;