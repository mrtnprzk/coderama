import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';

const FavoriteCard = ( props ) => {
  return (
    <Card key={props.key} sx={{ display: 'flex', width: 300, margin: '1rem 0' }}>
        <Link to={props.url}>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={props.src}
                alt={props.alt}
            />
        </Link> 
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton>
              <ClearIcon fontSize='small' sx={{ margin: '5px' }} />
            </IconButton>
          </Box>
          <CardContent sx={{ flex: '1 0 auto', paddingTop: '0'}}>
            <Typography component="div" variant="h6">
              {props.Title} ({props.Year})
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {props.Genre}
            </Typography>
          </CardContent>
        </Box>
    </Card>
  )
}

export default FavoriteCard