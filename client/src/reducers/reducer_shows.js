import { FETCH_SHOWS_SUCCESS,
         FETCH_SHOW_SUCCESS,
         CLEAR_SHOW,
         FETCH_SEARCH_SUCCESS,
         FETCH_CONFIG_SUCCESS
} from '../actions/action_shows';

const INITIAL_STATE = {showList: [], urlConfig: null, searchTerm: null, show: null}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SHOWS_SUCCESS:
      return {...state, showList: action.shows, searchTerm: null, show: null};
    case FETCH_SHOW_SUCCESS:
      return {...state, show: {...action.show, ...action.cast}};
    case FETCH_SEARCH_SUCCESS:
      return {...state, showList: action.shows, searchTerm: action.searchTerm};
    case FETCH_CONFIG_SUCCESS:
      return {...state, urlConfig: action.urlConfig};
    case CLEAR_SHOW:
      return {...state, show: null};
    default:
      return state;
  }
}
