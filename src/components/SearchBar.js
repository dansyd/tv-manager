import React, { Component } from 'react';
import './css/SearchBar.css';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ term: this.refs.inputSearch.value });
    this.props.onSearchTermChange(this.refs.inputSearch.value);
    this.refs.inputSearch.value = '';
  }

  render() {
    return (
      <div className="search-bar">
        <div className="container">
          <form onSubmit={this.handleSubmit} >
            <input type="text" ref="inputSearch" placeholder="Enter the name of the show" />
            <button type="submit" className="main-btn">Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar
