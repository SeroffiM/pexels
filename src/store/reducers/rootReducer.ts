import { photoReducer } from './photoReducer';
import { combineReducers } from 'redux';
import { categoriesReducer } from './categories';

export const RootReducer = combineReducers({
  photo: photoReducer,
  categories:categoriesReducer
});

export type RootState = ReturnType<typeof RootReducer>