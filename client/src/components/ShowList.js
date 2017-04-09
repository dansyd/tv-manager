import React, { Component } from 'react';
import axios from 'axios';
import './css/ShowsList.css';
import ShowItem from './ShowItem';
import CTA from './static/CTA';
import SearchFilter from './SearchFilter';
import SearchBar from './SearchBar';


class ShowsList extends Component {
  constructor() {
    super();

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);

    this.state = { shows: [], urlConfig: null, searchTerm: null };
  }

  renderShows() {
    return this.state.shows.map( show => {
      return <ShowItem key={show.id} show={show} urlConfig={this.state.urlConfig}/>
    })
  }

  fetchDiscoverTVShows() {
    const url = '/api/discover'
    axios.get(url)
      .then( response => {
        const shows = response.data;
        this.setState({ shows, searchTerm: null });
      }).catch(error => {
        throw error;
      });
  }

  componentWillMount() {

    this.fetchDiscoverTVShows();

    const url = '/api/config'
    axios.get(url)
      .then( response => {
        const urlConfig = response.data;
        this.setState({ urlConfig });
      }).catch(error => {
        throw error;
      });
  }

  handleClearSearch() {
    this.fetchDiscoverTVShows();
  }

  handleSearchTermChange(term) {
    const url = `/api/search?term=${term}`
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
      <div>
        <CTA />
        <SearchBar onSearchTermChange={this.handleSearchTermChange} />
        <div className="shows container">
          <SearchFilter
            searchTerm={this.state.searchTerm}
            onClearSearch={this.handleClearSearch}
          />
          <ul className="shows-list">
            {this.renderShows()}
          </ul>
        </div>
      </div>
    )
  }

}

export default ShowsList;
