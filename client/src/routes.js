import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ShowInfo from './components/ShowInfo';
import Homepage from './components/Homepage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="show/:showId" component={ShowInfo} />
  </Route>
)
