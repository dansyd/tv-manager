import { combineReducers } from 'redux';
import reducerShows from './reducer_shows';

const rootReducers = combineReducers({
  shows: reducerShows
});

export default rootReducers;
