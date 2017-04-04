import React from 'react';


const renderShows = (props) => {
  return props.shows.map( show => {
    return show.name;
  })
}

const ShowsList = (props) => {
  return (
    <div>
      <ul>
        {renderShows(props)}
      </ul>
    </div>
  )
}

export default ShowsList;
