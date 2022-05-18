import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MovieCard( props ) {

  return (
    <Card className='movie-card' sx={{ maxWidth: 300 }}>
        <Link to={props.url}>
          <CardMedia
            component="img"
            height="450"
            image={props.src}
            alt={props.alt}
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" zIndex='1000' component="div">
              {props.Title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ({props.Year})
            </Typography>
            
          </CardContent>
        </Link>
    </Card>
  );
}
