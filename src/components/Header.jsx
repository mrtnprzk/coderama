import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';


const Header = () => {
  return (
    <header>
        <Link to='/'><SearchIcon fontSize='large'/></Link>
        <Link to='/favorite'><StarIcon fontSize='large'/></Link>
        <a href='https://github.com/mrtnprzk/coderama'><GitHubIcon fontSize='large'/></a>
    </header>
  )
}

export default Header