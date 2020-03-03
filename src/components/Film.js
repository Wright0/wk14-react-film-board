import React from 'react';

function Film({filmName, url}){

  return(
    <li>
      <a href={url}>{ filmName }</a>
    </li>
  );
}

export default Film;
