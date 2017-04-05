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

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.state = { shows: [], urlConfig: null, searchTerm: null };
  }

  componentWillMount() {
    let url = `${ROOT_URL}discover/tv?api_key=${api_key}&sort_by=popularity.desc&first_air_date_year=2016&with_original_language=en&page=1`
    axios.get(url)
      .then( response => {
        const shows = response.data.results;
        this.setState({ shows });
      }).catch(error => {
        throw error;
      });

    url = `${ROOT_URL}configuration?api_key=${api_key}`
    axios.get(url)
      .then( response => {
        const urlConfig = response.data.images;
        this.setState({ urlConfig });
      }).catch(error => {
        throw error;
      });
  }

  componentDidUpdate() {

  }

  handleSearchTermChange(term) {
    const url = `${ROOT_URL}search/tv?api_key=${api_key}&query=${term}&page=1`
    axios.get(url)
      .then( response => {
        const shows = response.data.results;
        this.setState({ shows, searchTerm: term });
      }).catch(error => {
        throw error;
      });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={this.handleSearchTermChange} />
        <ShowsList data={this.state} />
      </div>
    );
  }
}

export default App;
