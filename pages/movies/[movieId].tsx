import { useRouter } from 'next/router';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Comments from '../../components/Comments';
import { addLike, Movie, MoviesState } from '../../redux/movieSlice';

const MoviePage = (props: any) => {
  const router = useRouter();
  const { movieId } = router.query;
  const dispatch = useDispatch();
  
  const movies = useSelector((state: any) => state.movie.list);
  
  let movieInfo: Movie = movies.filter((movie: Movie) => movie.imdbID === movieId)[0];

  console.log(movieInfo);

  return(
    <div>
      <p>{movieId}</p>
      {movieInfo && <p>{movieInfo.Title}</p>}
      {movieInfo && <p>{movieInfo.like? 'liked': 'not liked'}</p>}
      <button onClick={() => dispatch(addLike(movieInfo.imdbID))}> Click to like</button>
      {movieInfo && <Comments comments={movieInfo.comments} id={movieInfo.imdbID}/>}
    </div>
  )
};


export default MoviePage;


