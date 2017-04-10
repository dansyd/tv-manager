import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShow } from '../actions/action_shows';
import Loader from './Loader';

class ShowInfo extends Component {

  componentWillMount() {
    this.props.actions.fetchShow(this.props.params.showId);
  }

  render() {
    const {show} = this.props;
    if (!show) {
      return <Loader />
    }
    return (
      <div>
        {show.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.shows.show
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({fetchShow}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfo);
