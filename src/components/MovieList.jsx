import React, { useState } from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <>
      {props.movies.map(movie => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </>
  );
}
