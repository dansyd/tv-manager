import axios from 'axios';

export const FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS';
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';

function fetchShowsSuccess(shows) {
  return {
    type: FETCH_SHOWS_SUCCESS,
    shows
  }
}

function fetchShowSuccess(show) {
  return {
    type: FETCH_SHOW_SUCCESS,
    show
  }
}

function fetchConfigSuccess(urlConfig) {
  return {
    type: FETCH_CONFIG_SUCCESS,
    urlConfig
  }
}

function fetchSearchSuccess(shows, searchTerm) {
  return {
    type: FETCH_SEARCH_SUCCESS,
    shows,
    searchTerm
  }
}

export function fetchDiscoverShows() {
  const url = '/api/discover';
  return function (dispatch) {
    return axios.get(url)
      .then(shows => {
        dispatch(fetchShowsSuccess(shows.data));
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchShow(showId) {
  const url = `/api/show/${showId}`;
  return function (dispatch) {
    return axios.get(url)
      .then(show => {
        dispatch(fetchShowSuccess(show.data));
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchSearchShow(term) {
  const url = `/api/search?q=${term}`;
  return function (dispatch) {
    return axios.get(url)
      .then(shows => {
        dispatch(fetchSearchSuccess(shows.data.results, term));
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchUrlConfig() {
  const url = '/api/config';
  return function (dispatch) {
    return axios.get(url)
      .then(urlConfig => {
        dispatch(fetchConfigSuccess(urlConfig.data));
      }).catch(error => {
        throw error;
      });
  }
}
