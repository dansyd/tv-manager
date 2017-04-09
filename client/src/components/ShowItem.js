import React from 'react'
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import './css/ShowItem.css';
import { Link } from 'react-router';

const ShowItem = ({show, urlConfig}) => {
  if (!urlConfig) {
    return <div>Loading...</div>
  }
  return (
    <li className="shows-list-item">
      <h3>{show.name}</h3>
      <img src={urlConfig.images.base_url + urlConfig.images.poster_sizes[3] + show.poster_path} alt={`${show.name} poster`}/>
      <div className="show-controls">
        <Link to={`/shows/${show.id}`} className="main-btn ctrl-btn"> <MdRemoveRedEye /> Show Info</Link>
        <button className="ctrl-btn"> <MdAddCircle />Watchlist</button>
      </div>
    </li>
  )
}

export default ShowItem
