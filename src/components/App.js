import React, { Component } from 'react';
import './css/App.css';
import SearchBar from './SearchBar';
import ShowsList from './ShowsList';
import axios from 'axios';
import { api_key } from '../config';

const ROOT_URL = 'https://api.themoviedb.org/3/'

class App extends Component {
  constructor() {
    super();
    this.state = { shows: [] , urlConfig: null };
  }

  componentWillMount() {
    let url = `${ROOT_URL}discover/tv?api_key=${api_key}&sort_by=popularity.desc&first_air_date_year=2016&page=1`
    axios.get(url)
      .then( response => {
        this.setState({ shows: response.data.results });
      }).catch(error => {
        throw error;
      });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <ShowsList shows={ this.state.shows } />
      </div>
    );
  }
}

export default App;
