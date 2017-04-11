import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverShows } from '../actions/action_shows';
import { fetchUrlConfig } from '../actions/action_shows';
import { fetchSearchShow } from '../actions/action_shows';
import { bindActionCreators } from 'redux';

import ShowItem from './ShowItem';
import CTA from './static/CTA';
import SearchFilter from './SearchFilter';
import SearchBar from './SearchBar';

import './css/ShowList.css';


class ShowsList extends Component {

  componentWillMount() {
    if (!this.props.shows.searchTerm) {
      this.props.actions.fetchDiscoverShows();
    }
    if (!this.props.shows.urlConfig) {
      this.props.actions.fetchUrlConfig();
    }
  }

  renderShows() {
    return this.props.shows.showList.map( show => {
      return <ShowItem key={show.id} show={show} urlConfig={this.props.shows.urlConfig}/>
    })
  }

  render() {
    return (
      <div>
        <CTA />
        <SearchBar onSearchTermChange={ (term) => this.props.actions.fetchSearchShow(term) } />
        <div className="shows container">
          <SearchFilter
            searchTerm={this.props.shows.searchTerm}
            onClearSearch={ () => this.props.actions.fetchDiscoverShows() }
          />

          <ul className="show-list">
            {this.renderShows()}
          </ul>
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
    actions: bindActionCreators({fetchDiscoverShows, fetchUrlConfig, fetchSearchShow}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
