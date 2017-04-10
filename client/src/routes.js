import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ShowInfo from './components/ShowInfo';
import ShowList from './components/ShowList';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ShowList} />
    <Route path="show/:showId" component={ShowInfo} />
  </Route>
)
