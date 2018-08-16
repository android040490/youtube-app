import { 
  FETCH_MOVIES_START, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_BY_SEARCH_START, 
  FETCH_MOVIES_BY_SEARCH_SUCCESS,
  FETCH_MOVIE_BY_ID_START,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_CHANNEL,
  NO_MORE_VIDEOS 
  } from './actionTypes.js';


export function fetchMoviesStart(){
  return { type : FETCH_MOVIES_START }
}

export function fetchMoviesSuccess( data , pageToken = ''){
  return {
    type : FETCH_MOVIES_SUCCESS,
    payload : {
      data,
      pageToken
    }
  }
}

export function fetchMoviesBySearchStart(){
  return { type : FETCH_MOVIES_BY_SEARCH_START }
}

export function fetchMoviesBySearchSuccess(payload){
  return {
    type : FETCH_MOVIES_BY_SEARCH_SUCCESS,
    payload
  }
}

export function fetchMovieStart(){
  return { type : FETCH_MOVIE_BY_ID_START }
}

export function fetchMovieSuccess(movie, channel){
  return { 
    type : FETCH_MOVIE_BY_ID_SUCCESS,
    payload : {
      movie,
      channel
    }
  }
}

// export function fetchChannel(payload){
//   return { 
//     type : FETCH_CHANNEL,
//     payload 
//   }
// }

export function noMoreVideos(){
  return { type : NO_MORE_VIDEOS }
}