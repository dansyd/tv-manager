import axios from 'axios';

export const FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS';
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const FETCH_CAST_SUCCESS = 'FETCH_CAST_SUCCESS';
export const CLEAR_SHOW = 'CLEAR_SHOW';


export function fetchDiscoverShows() {
  const url = '/api/discover';
  return function (dispatch) {
    axios.get(url)
      .then(res => {
        dispatch({
          type: FETCH_SHOWS_SUCCESS,
          shows: res.data
        });
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchShow(showId) {
  const url = `/api/show/${showId}`;
  return function (dispatch) {
    axios.get(url)
      .then(show => {

        axios.get(`/api/show/${showId}/cast`)
          .then(cast => {
            dispatch({
              type: FETCH_SHOW_SUCCESS,
              show: show.data,
              cast: cast.data
            });
          }).catch(error => {
            throw error;
          });
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchCast(showId) {
  const url = `/api/show/${showId}/cast`;
  return function (dispatch) {
    axios.get(url)
      .then(res => {
        dispatch({
          type: FETCH_CAST_SUCCESS,
          cast: res.data.cast
        });
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchSearchShow(term) {
  const url = `/api/search?q=${term}`;
  return function (dispatch) {
    axios.get(url)
      .then(res => {
        dispatch({
          type: FETCH_SEARCH_SUCCESS,
          shows: res.data.results,
          searchTerm: term
        });
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchUrlConfig() {
  const url = '/api/config';
  return function (dispatch) {
    axios.get(url)
      .then(res => {
        dispatch({
          type: FETCH_CONFIG_SUCCESS,
          urlConfig: res.data
        });
      }).catch(error => {
        throw error;
      });
  }
}

export function clearShow() {
  return {
    type: CLEAR_SHOW,
  }
}
