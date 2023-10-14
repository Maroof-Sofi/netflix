import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
const useMovieTrailer = ()=>{
    const dispatch = useDispatch();
   
    // fetch trailer video && updating the store with trailor data
    const getMovieVideos = async (movieId)=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
      console.log(json);

      const filterData = json.results.filter((video) => video.type==="Trailer");
       const trailer = filterData.length ?  filterData[0] : json.results[0];
       console.log(trailer);
    //    setTrailerId(trailer.key);
    dispatch(addTrailerVideos(trailer));    
};
    useEffect(()=>{
      getMovieVideos();
    },[]);

  };
export default useMovieTrailer;