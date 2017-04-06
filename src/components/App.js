import React, { Component } from 'react';
import './css/App.css';
import SearchBar from './SearchBar';
import ShowsList from './ShowsList';
import CTA from './static/CTA.js';
import axios from 'axios';
import { api_key } from '../config';
import { TMDB_ROOT_URL } from '../index';


class App extends Component {
  constructor() {
    super();

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);

    this.state = { shows: [], urlConfig: null, searchTerm: null };
  }

  componentWillMount() {
    this.fetchDiscoverTVShows();

    const url = `${TMDB_ROOT_URL}configuration?api_key=${api_key}`
    axios.get(url)
      .then( response => {
        const urlConfig = response.data.images;
        this.setState({ urlConfig });
      }).catch(error => {
        throw error;
      });
  }

  fetchDiscoverTVShows() {
    const url = `${TMDB_ROOT_URL}discover/tv?api_key=${api_key}&sort_by=popularity.desc&first_air_date_year=2016&with_original_language=en&page=1`
    axios.get(url)
      .then( response => {
        const shows = response.data.results;
        this.setState({ shows, searchTerm: null });
      }).catch(error => {
        throw error;
      });
  }

  handleClearSearch() {
    this.fetchDiscoverTVShows();
  }

  handleSearchTermChange(term) {
    const url = `${TMDB_ROOT_URL}search/tv?api_key=${api_key}&query=${term}&page=1`
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
        <CTA />
        <SearchBar onSearchTermChange={this.handleSearchTermChange} />
        <ShowsList data={this.state} onClearSearch={this.handleClearSearch}/>
      </div>
    );
  }
}

export default App;
