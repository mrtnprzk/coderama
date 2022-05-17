import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MovieCard( props ) {

  return (
    <Card className='movie-card' sx={{ maxWidth: 300 }}>
      <CardActionArea className='movie-card-action' href={props.href} >
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
          <Typography variant="body2" color="text.secondary">
            ({props.Year})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
