import React, { Component } from 'react';
import axios from 'axios';
import { api_key } from '../config';
import { TMDB_ROOT_URL } from '../index';

class ShowInfo extends Component {

  componentWillMount() {
    const {showId} = this.props.match.params;
    const url = `${TMDB_ROOT_URL}tv/${showId}?api_key=${api_key}`;
    axios.get(url)
      .then( response => {
        console.log(response.data.name);
      }).catch(error => {
        throw error;
      })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default ShowInfo;
