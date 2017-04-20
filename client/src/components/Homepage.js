import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverShows, fetchUrlConfig, fetchSearchShow, clearShow } from '../actions/action_shows';
import { bindActionCreators } from 'redux';

import CTA from './static/CTA';
import SearchFilter from './SearchFilter';
import SearchBar from './SearchBar';
import ShowList from './ShowList';

import './css/Homepage.css';


class Homepage extends Component {

  componentDidMount() {
    if (!this.props.shows.searchTerm) {
      this.props.actions.fetchDiscoverShows();
    }
    if (this.props.shows.show) {
      this.props.actions.clearShow();
    }
    if (!this.props.shows.urlConfig) {
      this.props.actions.fetchUrlConfig();
    }
  }

  render() {
    return (
      <div className="homepage-container">
        <CTA />
        <SearchBar onSearchTermChange={ (term) => this.props.actions.fetchSearchShow(term) } />
        <div className="shows container">
          <SearchFilter
            searchTerm={this.props.shows.searchTerm}
            onClearSearch={ () => this.props.actions.fetchDiscoverShows() }
          />
        <ShowList shows={this.props.shows.showList} urlConfig={this.props.shows.urlConfig} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({fetchDiscoverShows, fetchUrlConfig, fetchSearchShow, clearShow}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
