import * as React from 'react';
import {useState, useEffect} from 'react';
import FavoriteCard from './FavoriteCard';

export default function FavoritePage() {

  const [showMovies, setShowMovies] = useState(
    JSON.parse(localStorage.getItem('fav-movies')) || []
  );

console.log(showMovies)
  return (
    <>
    {showMovies.map((movie, key) => (
      
      <FavoriteCard key={key} Title={movie.Title} Year={movie.Year} Genre={movie.Genre} src={movie.Poster} alt={movie.Title} url={"/detail/" + movie.imdbID}/>
      
    ))}
    </>
  );
}
