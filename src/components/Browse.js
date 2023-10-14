import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header'
import MainConatiner from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

    useNowPlayingMovies();
 
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