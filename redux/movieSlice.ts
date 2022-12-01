import {createSlice, current} from '@reduxjs/toolkit';
import { hydrate } from 'react-dom';
import { HYDRATE } from 'next-redux-wrapper';

// import {RootState} from './store';
import mockMovieList from './mockMovieList';

export interface MoviesState {
  list: Movie[],
}
export interface Movie {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
  like: boolean,
  comments: string[],
}
const initialData = mockMovieList.Search.map(movie => ({...movie, like: false, comments: []}));

const initialState: MoviesState = {
  list: initialData,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.list = [...action.payload];
    },
    addLike: (state, action) =>{
      state.list.map(movie => {
        if(movie.imdbID === action.payload){ 
          movie.like = true;
        }
        return {...movie}
      });
      console.log(current(state.list));
    },
    addComment: (state, action) => {
      state.list.map(movie => {
        if(movie.imdbID === action.payload.id){ 
          movie.comments.push(action.payload.comment);
        }
        return {...movie}
      });
      // console.log(current(state));
    },
  },
})

export const { setMovieList, addLike, addComment } = movieSlice.actions;
// export const movieList = (state: RootState) => state.movie.list;
export default movieSlice.reducer;