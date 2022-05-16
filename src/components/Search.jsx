import React, {useState, useEffect} from 'react'

const Search = () => {

  const [searchResult, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("Batman");
  const urlSearch = `http://www.omdbapi.com/?apikey=9e8f472a&s=${searchValue}&type=movie`;

  //fetching data for search
  const fetchDataSearch = async () => {
  const resp = await fetch(urlSearch);
  const result = await resp.json();
  result && setSearchResults(result.Search);
  }

  useEffect(() => {
    fetchDataSearch();
  }, []);

  return (
    <>
      <input 
        type="search" 
        id="searchBar" 
        onChange={(e) => {
            setSearchValue(e.target.value)}}
      />
      <button onClick={fetchDataSearch}>Search</button>

      <h1>Movies:</h1>
      {searchResult.map( (movie, key) => (
        <div key={key}>
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt={movie.Title}/>
        </div>

      ) )}
    </>
  )
}

export default Search