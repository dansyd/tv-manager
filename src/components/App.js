import React, { Component } from 'react';
import './css/App.css';
import SearchBar from './SearchBar';
import ShowsList from './ShowsList';
import CTA from './static/CTA.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);

    this.state = { shows: [], urlConfig: null, searchTerm: null };
  }

  fetchDiscoverTVShows() {
    const url = 'http://localhost:8080/api/discover'
    axios.get(url)
      .then( response => {
        const shows = response.data.results;
        this.setState({ shows, searchTerm: null });
      }).catch(error => {
        throw error;
      });
  }

  componentWillMount() {
    this.fetchDiscoverTVShows();
  }

  handleClearSearch() {
    this.fetchDiscoverTVShows();
  }

  handleSearchTermChange(term) {
    // const url = `${TMDB_ROOT_URL}search/tv?api_key=${api_key}&query=${term}&page=1`
    // axios.get(url)
    //   .then( response => {
    //     const shows = response.data.results;
    //     this.setState({ shows, searchTerm: term });
    //   }).catch(error => {
    //     throw error;
    //   });
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
