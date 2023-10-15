 // Ftech data from TMDB api and update the dtore with all movies
 import { useDispatch } from "react-redux";
 import { API_OPTIONS } from "../utils/constants";
 import { addTrendingMovies } from "../utils/moviesSlice";
 import { useEffect } from "react";

  const useTrendingMovies = ()=>{
  const dispatch = useDispatch();
  
  const getTrendingMovies = async () => {
   const data = await fetch('https://api.themoviedb.org/3/trending/movie/{time_window}', API_OPTIONS);
   const json = await data.json();
 //   console.log(json.results);
   dispatch(addTrendingMovies(json.results));
  };
 
  useEffect(()=>{
     getTrendingMovies();
  }, []);
 };
 


export default useTrendingMovies ;