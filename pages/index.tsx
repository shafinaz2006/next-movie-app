import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieRow from '../components/MovieRow';

import { Movie, setMovieList } from '../redux/movieSlice';
import styles from '../styles/Home.module.css'

export default function Home() {

  const movies = useSelector((state: any) => state.movie.list);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const getName = (event: any) => {
    setName(event.target.value);
  }
  const searchMovie = () => {
    (async () => {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=4bb50978&s=${name}}`,
        );
        const data = await response.json();
        dispatch(setMovieList(data.Search));
      })();
  }
  return (
    <div className={styles.container}>
      <h1>Movie App</h1>
      <label htmlFor='movieName'>Search your movie: </label>
      <input type='text' id='movieName' onChange={getName}/>
      <button onClick={searchMovie}>Search Movie</button>
      {movies.length > 0 && 
        movies.map((movie: Movie, index: number) => <MovieRow movie={movie} key={index}/>)
      }
    </div>
  )
}
