import React from 'react';
import './css/ShowsList.css';
import ShowControls from './ShowControls';
import SearchFilter from './SearchFilter';

const renderShows = (data) => {
  const url = data.urlConfig.base_url;
  const posterSizes = data.urlConfig.poster_sizes[3];
  return data.shows.map( show => {
    return (
      <li key={show.id} className="shows-list-item">
        <h3>{show.name}</h3>
        <img src={url + posterSizes + show.poster_path} alt={`${show.name} poster`}/>
        <ShowControls />
      </li>
    )
  })
}

const ShowsList = ({data}) => {
  if (!data.urlConfig) {
    return <div>Loading.....</div>
  }
  return (
    <div className="shows container">
      <SearchFilter searchTerm={data.searchTerm}/>
      <ul className="shows-list">
        {renderShows(data)}
      </ul>
    </div>
  )
}

export default ShowsList;
