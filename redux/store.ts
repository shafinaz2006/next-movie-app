
import movieReducer, { MoviesState } from './movieSlice';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

export const store = () => configureStore({
  reducer: {
    movie: movieReducer,
  },
})

export const wrapper = createWrapper(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

