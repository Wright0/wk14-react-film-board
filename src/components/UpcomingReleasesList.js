import React from 'react';
import Film from './Film.js'
import './UpcomingReleasesList.css'

function UpcomingReleasesList({films}){

  const filmComponent = films.map(film => {
    return(
      <Film
      filmName={film.name}
      url={film.url}
      key={film.id}
      />
    )
  })

  //You can send down the movie object instead of the name and url individually.

  return (
      <ul className='movie-item'>
        {filmComponent}
      </ul>
  );
}

export default UpcomingReleasesList;
