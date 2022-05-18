import * as React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoritePage from './FavoritePage';

export default function DetailPage() {

  const params = useParams();

  const [detailResult, setDetailResults] = useState([]);
  const urlSearch = `http://www.omdbapi.com/?apikey=9e8f472a&i=${params.imdbID}`;

  const [favoriteStar, setFavoriteStar] = useState(false); //prepared for later
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem('fav-movies')) || []
  );

  //fetching data for detail
  const fetchDataDetail = async () => {
  const resp = await fetch(urlSearch);
  const result = await resp.json();
  result && setDetailResults(result);
  }

  useEffect(() => {
    fetchDataDetail();
  }, []);

  function add() {
    setFavoriteMovies([
      ...favoriteMovies,
      detailResult
    ]);
  }

  useEffect(() => {
    window.localStorage.setItem('fav-movies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <form onSubmit={(e)=> e.preventDefault()}>
      <Card sx={{ maxWidth: 300 }} style={{margin: "1.5rem 0"}}>
        <IconButton
          type='submit'
          onClick={ add }
          sx={{ position: 'absolute',
                marginTop: "0.5rem",
                marginLeft: "15.8rem",
                color: '#ffcb20',
                backgroundColor: '#FF1818'
          }}
        >
          {favoriteStar ? <StarIcon/> : <StarBorderIcon/>}

        </IconButton>
        <CardMedia
          component="img"
          height="450"
          image={detailResult.Poster}
          alt={detailResult.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detailResult.Title} ({detailResult.Year})
            <Typography variant="body1" color="text.secondary">
            {detailResult.Genre} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {detailResult.Country} 
            </Typography>
          </Typography>
          <br/>
          <Typography variant="body2">
            {detailResult.Plot}
          </Typography>
          <br/>
          <Typography variant="body2" >
            <strong>Director:</strong> {detailResult.Director}
          </Typography>
          <Typography variant="body2" >
            <strong>Actors:</strong> {detailResult.Actors}
          </Typography>
          <Typography variant="body2" >
            <strong>Writer:</strong> {detailResult.Writer}
          </Typography>
        </CardContent>
      </Card>
    </form>  
  );
}