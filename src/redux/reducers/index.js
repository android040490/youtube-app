import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import movies from './movies';
import movieInfo from './movieInfo';
import moviesBySearch from './moviesBySearch';


export const reducers = combineReducers({
  routing: routerReducer,
  movies,
  movieInfo,
  moviesBySearch
})
