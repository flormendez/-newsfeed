import { types } from "../actions/types"

const defaultState = {
    fetching: false,
    news: [],
    newsCategory: [],
    error: null
  };

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case types.FETCH_NEWS:
        return {
          ...state,
          fetching: true
        };
      case types.ADD_NEWS:
        return {
          ...state,
          news: action.payload.response,
          fetching: false
        };
      case types.ERROR_NEWS:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      case types.FETCH_NEWS_BY_CAT:
        return {
          ...state,
          fetching: true
        };
        case types.ADD_NEWS_BY_CAT:
        return {
          ...state,
          newsCategory: action.payload.response,
          fetching: false
        };
      
      
  
      default:
        return { ...state };
    }
  };