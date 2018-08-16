import { 
  FETCH_MOVIE_BY_ID_START,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_CHANNEL} from '../actionTypes.js';

const initialState = {
  data : {},
  channel : {},
  loading : false
}

export default function movieInfo( state = initialState, { type , payload } ){
  switch (type){
    
    case FETCH_MOVIE_BY_ID_START :
      return {
        ...state,
        loading : true
      }

    case FETCH_MOVIE_BY_ID_SUCCESS :
      return {
        ...state,
        loading : false,
        data : payload.movie,
        channel : payload.channel
      }

    case FETCH_CHANNEL :
      return {
        ...state,
        channel : payload
      }

    default:
      return state
  }
}