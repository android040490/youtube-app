import { 
  FETCH_MOVIES_BY_SEARCH_START, 
  FETCH_MOVIES_BY_SEARCH_SUCCESS
  } from '../actionTypes.js';

const initialState = {
  data : [],
  loading : false
}

export default function moviesBySearch( state = initialState, { type , payload } ){
  switch (type){
    
    case FETCH_MOVIES_BY_SEARCH_START :
      return {
        ...state,
        loading : true
      }

    case FETCH_MOVIES_BY_SEARCH_SUCCESS :
      return {
        ...state,
        data : payload,
        loading : false
      }

    default:
      return state
  }
}