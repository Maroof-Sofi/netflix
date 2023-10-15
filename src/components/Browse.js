import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import Header from './Header'
import MainConatiner from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();  //this will fetch the popular movies and update the store
    useTrendingMovies();
 
  return (

    <div>
      <Header/>
      <MainConatiner/>
      <SecondaryContainer/>
      {/* 
        MainContainer
        -videoBackground
        -VideoTitle
         SecondaryContainer
          -MovieList *n
           -cards *n
      */}
    </div>
      );
  
};

export default Browse;