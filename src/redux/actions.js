import YoutubeAPI from '../YTapi.js';
import * as Actions from './actionCreators.js'



export const fetchMovies = () => ( dispatch, getState ) => {
  dispatch(Actions.fetchMoviesStart());
  let state = getState();
  let pageToken = state.movies.pageToken;

  if(pageToken){
    YoutubeAPI.fetchMostPopular(pageToken).then(resp => {
      dispatch(Actions.fetchMoviesSuccess(resp.data.items, resp.data.nextPageToken))
  }).catch(err => console.log(err))
  } else {
    dispatch(Actions.noMoreVideos());
  }
}


export const fetchMoviesBySearch = (param) => dispatch => {
  dispatch( Actions.fetchMoviesBySearchStart() )

  YoutubeAPI.fetchMoviesBySerch(param).then(resp => {
    dispatch( Actions.fetchMoviesBySearchSuccess(resp.data.items) )
  })
}

export const fetchMovieById = (id) => dispatch => {
  dispatch( Actions.fetchMovieStart() );

  YoutubeAPI.fetchMovieById(id).
    then( resp => {
      let movie = resp.data.items[0];
      return movie;
    }).
    then( movie => YoutubeAPI.fetchChannelById(movie.snippet.channelId).
      then( resp => {
        let channel = resp.data.items[0].snippet;
        dispatch( Actions.fetchMovieSuccess( movie , channel) );
      })
    ) 
}
