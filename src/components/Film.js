import React from 'react';

function Film({name, url}){

  return(
    <li>
      <a href={url}>{ filmName }</a>
    </li>
  );
}

export default Film;
