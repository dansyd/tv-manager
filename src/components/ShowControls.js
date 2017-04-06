import React from 'react'
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import './css/ShowControls.css';
import { Link } from 'react-router-dom';

const ShowControls = (props) => {
  return (
    <div className="show-controls">
      <Link to={`/shows/${props.showId}`} className="main-btn ctrl-btn"> <MdRemoveRedEye /> Show Info</Link>
      <button className="ctrl-btn"> <MdAddCircle />Watchlist</button>
    </div>
  )
}

export default ShowControls
