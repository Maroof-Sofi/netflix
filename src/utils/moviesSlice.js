import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        NowPlayingMovies: null,
         trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addTrailerVideos : (state, action)=>{
            state.trailerVideo = action.payload;

        },
    },
});
export const {addNowPlayingMovies, addTrailerVideos} = moviesSlice.actions;

export default moviesSlice.reducer;