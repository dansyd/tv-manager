import React from 'react'
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import './css/ShowControls.css';

const ShowControls = () => {
  return (
    <div className="show-controls">
      <a href="#" className="main-btn ctrl-btn"> <MdRemoveRedEye /> Show Info</a>
      <button className="ctrl-btn"> <MdAddCircle />Watchlist</button>
    </div>
  )
}

export default ShowControls
