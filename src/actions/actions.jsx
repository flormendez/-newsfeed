import {types} from "../actions/types"
import Moment from 'moment'


export const actions = {
    getNews: () => dispatch => {
        const today = new Date()
    const formatDateFrom = Moment(today).format("YYYY-MM-DD");
      dispatch({ type: types.FETCH_NEWS });
      fetch(`https://api.canillitapp.com/latest/${formatDateFrom}`)
        .then(response => response.json())
        .then(response => {
          console.log("response ok");
          console.log(response);
          dispatch({
            type: types.ADD_NEWS,
            payload: { response }
          });
        })
        .catch(error => {
          dispatch({
            type: types.ERROR_NEWS,
            payload: error
          });
        });
    },
    getNewsByCategory: (category) => dispatch => {
 
      dispatch({ type: types.FETCH_NEWS_BY_CAT });
      // fetch(`https://api.canillitapp.com/news/category/${category}`)
      fetch(`https://api.canillitapp.com/news/category/5`)

        .then(response => response.json())
        .then(response => {
          console.log("response ok");
          console.log(response);
          dispatch({
            type: types.ADD_NEWS_BY_CAT,
            payload: { response }
          });
        })
        .catch(error => {
          dispatch({
            type: types.ERROR_NEWS,
            payload: error
          });
        });
    }
  };