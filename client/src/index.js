import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers/index';
import Thunk from 'redux-thunk';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const store = createStoreWithMiddleware(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('root')
);
