import React from 'react';
import './css/ShowCast.css';

const renderCast = (cast, urlCast) => {
  let maxActors = cast.length;
  if (maxActors > 8) {
    maxActors = 8;
  }
  return cast.slice(0, maxActors).map( actor => {

    let imgUrl = '';
    if (actor.profile_path) {
      imgUrl = urlCast + actor.profile_path;
    } else {
      imgUrl = '/images/no-thumb.jpg';
    }

    const style= {
      backgroundImage: `url(${imgUrl})`
    }

    return (
      <li key={actor.credit_id}>
        <div className="actor-img" style={style} />
        <p>{actor.name} as {actor.character}</p>
      </li>
    )
  })
}

const ShowCast = ({cast, urlCast}) => {
  return (
    <div className="show-cast">
    <p><span className="label">Cast</span></p>
      <ul>
        {renderCast(cast, urlCast)}
      </ul>
    </div>
  )
}

export default ShowCast;
