
import CSS from 'csstype';
import { useDispatch } from 'react-redux';
import { addComment, addLike } from '../redux/movieSlice';
import { useState } from 'react';
import { Movie } from '../redux/movieSlice';
import Comments from './Comments';
/* eslint-disable @next/next/no-img-element */

interface MovieProps {
  movie: Movie,
}

const styles = {
  poster: {
    height: '20rem',
  },
  title: {
    fontWeight: 'bold',
  },
  icon: {
    height: '20px',
    width: '20px',
  }
}

const containerStyle: CSS.Properties = {
  display: "flex",
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '2rem 1rem',
}

const MovieRow = (props: MovieProps) => {
  const dispatch = useDispatch();
  
  return (
    <div >
      <div style={containerStyle}>
        <a href={`/movies/${props.movie.imdbID}`}>
          <img src={props.movie.Poster} style={styles.poster} alt='movie poster'/>
        </a>
        <p style={styles.title}>{props.movie.Title}</p>
        <img src={props.movie.like? './assets/heart.png': './assets/like.png'} alt='like button' style={styles.icon}
          onClick={() => dispatch(addLike(props.movie.imdbID))}/>
      </div>
      {props.movie.comments && <Comments comments={props.movie.comments} id={props.movie.imdbID}/>}
    </div>
  )
}

export default MovieRow;