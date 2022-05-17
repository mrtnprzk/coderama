import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {

  const params = useParams();

  const [detailResult, setDetailResults] = useState([]);
  const urlSearch = `http://www.omdbapi.com/?apikey=9e8f472a&i=${params.imdbID}`;

  //fetching data for detail
  const fetchDataDetail = async () => {
  const resp = await fetch(urlSearch);
  const result = await resp.json();
  console.log(result)
  result && setDetailResults(result);
  }

  useEffect(() => {
    fetchDataDetail();
  }, []);

  return (
    <div>
      
      <img src={detailResult.Poster} alt={detailResult.Title}/>
      <div>
        <h2>{detailResult.Title}</h2>
        <p>Year: {detailResult.Year}</p>
        <p>Genre: {detailResult.Genre}</p>
        <p>Runtime: {detailResult.Runtime}</p>
        <p>Rating: {detailResult.imdbRating}</p>
        <p>Plot: {detailResult.Plot}</p>
      </div>
    </div>
  )
}

export default Detail