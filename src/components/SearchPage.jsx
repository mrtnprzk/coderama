import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const SearchPage = ( ) => {

  const [searchResult, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("Batman");
  const urlSearch = `http://www.omdbapi.com/?apikey=9e8f472a&s=${searchValue}&type=movie`;

  //fetching data for search
  const fetchDataSearch = async () => {
  const resp = await fetch(urlSearch);
  const result = await resp.json();
  // console.log(result.Search)
  result && setSearchResults(result.Search);
  }

  useEffect(() => {
    fetchDataSearch();
  }, []);

  return (
    <>
      <SearchBar
          setSearchValue={setSearchValue} 
          fetchDataSearch={fetchDataSearch} 
      />

      {searchResult.map( (movie, key) => (
       
        <MovieCard key={key} Title={movie.Title} Year={movie.Year} src={movie.Poster} alt={movie.Title} url={"/detail/" + movie.imdbID}/>
        
      ) )}
    </>
  )
}

export default SearchPage