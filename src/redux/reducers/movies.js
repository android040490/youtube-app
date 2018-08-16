import { 
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  NO_MORE_VIDEOS } from '../actionTypes.js';

const initialState = {
  data : [],
  pageToken : ' ',
  noVideos : false,
  loading : false
}

export default function movies( state = initialState, { type , payload } ){
  switch (type){
    case FETCH_MOVIES_START :
      return {
        ...state,
        loading : true
      }

    case FETCH_MOVIES_SUCCESS :
      return {
        ...state,
        data : [...state.data].concat(payload.data),
        pageToken : payload.pageToken,
        loading : false
        }

    case NO_MORE_VIDEOS :
      return {
        ...state,
        noVideos : true,
        loading : false
      }

    default:
      return state
  }
}