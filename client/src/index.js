import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import ShowInfo from './components/ShowInfo';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const TMDB_ROOT_URL = 'https://api.themoviedb.org/3/';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={App}/>
      <Route path="/shows/:showId" component={ShowInfo}/>
      <Footer />
    </div>
  </Router>
  ,
  document.getElementById('root')
);
