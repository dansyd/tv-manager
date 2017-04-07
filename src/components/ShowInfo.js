import React, { Component } from 'react';
import axios from 'axios';

class ShowInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {show: null};
  }

  componentWillMount() {
    // const {showId} = this.props.match.params;
    // const url = `${TMDB_ROOT_URL}tv/${showId}?api_key=${api_key}`;
    // axios.get(url)
    //   .then( response => {
    //     this.setState({show: response.data})
    //   }).catch(error => {
    //     throw error;
    //   })
  }

  render() {
    const {show} = this.state;
    if (!show) {
      return <h2>Loading.....</h2>
    }
    return (
      <div>
        {this.state.show.name}
      </div>
    )
  }
}

export default ShowInfo;
