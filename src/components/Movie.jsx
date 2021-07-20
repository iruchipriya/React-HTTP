import React, { useState } from 'react';

export default function Movie(props) {
  return (
    <li>
      <h3>Movie Name : {props.movie.title} </h3>
      <h4>Release Date : {props.movie.releaseDate} </h4>
      <p> Desc : {props.movie.openingText}</p>
    </li>
  );
}
