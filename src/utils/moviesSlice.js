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
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },

        addTrailerVideos : (state, action)=>{
            state.trailerVideo = action.payload;

        },
    },
});
export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTrendingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;