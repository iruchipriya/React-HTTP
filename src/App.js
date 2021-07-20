import React, { useState } from 'react';
import './style.css';
import MovieList from './components/MovieList';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // const fetchMovie = () => {
  //   return fetch('https://swapi.dev/api/films/')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       const transformedMovies = data.results.map(movieData => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date
  //         };
  //       });
  //       setMovies(data.results);
  //       console.log('click');

  //       console.log(data.results);
  //     });
  // };

  async function fetchMovie() {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const transformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      };
    });
    setMovies(data.results);
    console.log('click');
    setLoading(false);
  }

  return (
    <div>
      <button onClick={fetchMovie}> Fetch Movies </button>
      {/* {setLoading ? <p>is Loading... </p> : <MovieList movies={movies} />}{' '} */}

      {!setLoading && movies.length > 0 && <MovieList movies={movies} />}
      {!setLoading && movies.length === 0 && <p> No movie</p>}
      {setLoading && <p> is Loading</p>}
    </div>
  );
}
