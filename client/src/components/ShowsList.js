import React from 'react';
import './css/ShowsList.css';
import ShowControls from './ShowControls';
import SearchFilter from './SearchFilter';

const renderShows = (data) => {
  return data.shows.map( show => {
    return (
      <li key={show.id} className="shows-list-item">
        <h3>{show.name}</h3>
        <img src={show.thumbnail} alt={`${show.name} poster`}/>
        <ShowControls showId={show.id}/>
      </li>
    )
  })
}

const ShowsList = ({data, onClearSearch}) => {
  return (
    <div className="shows container">
      <SearchFilter searchTerm={data.searchTerm} onClearSearch={onClearSearch}/>
      <ul className="shows-list">
        {renderShows(data)}
      </ul>
    </div>
  )
}

export default ShowsList;