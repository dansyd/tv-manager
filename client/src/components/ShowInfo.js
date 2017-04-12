import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShow, fetchUrlConfig } from '../actions/action_shows';
import ShowCast from './ShowCast';
import Loader from './Loader';

import './css/ShowInfo.css';

class ShowInfo extends Component {

  componentWillMount() {
    if (!this.props.shows.show) {
      this.props.actions.fetchShow(this.props.params.showId);
    }
    if (!this.props.shows.urlConfig) {
      this.props.actions.fetchUrlConfig();
    }
  }

  render() {

    const {show} = this.props.shows;
    const {urlConfig} = this.props.shows;

    if (!show || !urlConfig || !show.cast) {
      return <Loader />
    }

    const urlBackdrop = urlConfig.images.base_url + urlConfig.images.backdrop_sizes[2];
    const urlPoster = urlConfig.images.base_url + urlConfig.images.poster_sizes[4];
    const urlCast = urlConfig.images.base_url + urlConfig.images.profile_sizes[1];

    const backdropStyle = {
      backgroundImage: `url(${urlBackdrop}${show.backdrop_path})`
    }

    const posterStyle = {
      backgroundImage: `url(${urlPoster}${show.poster_path})`
    }

    return (
      <div className="backdrop-img" style={backdropStyle}>
        <div className="container show-wrapper">
          <div className="show-img" style={posterStyle} />
          <div className="show-info">
            <h1>{ show.name }</h1>
            <p>{ show.overview}</p>
            <div className="show-details">
              <div><span className="label">First aired</span> {new Date(show.first_air_date).toLocaleDateString()}</div>
              <div><span className="label">Last aired</span> {new Date(show.last_air_date).toLocaleDateString()}</div>
              <div><span className="label">Status</span> {show.status}</div>
              <div><span className="label">No of seasons</span> {show.number_of_seasons}</div>
              <div><span className="label">No of episodes</span> {show.number_of_episodes}</div>
              <div><span className="label">Votes avarage</span> {show.vote_average}</div>
            </div>
          <ShowCast cast={show.cast} urlCast={urlCast}/>
          </div>
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
    actions: bindActionCreators({fetchShow, fetchUrlConfig}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfo);
