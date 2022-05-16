import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'>Search</Link>
        <Link to='/favorite'>Favorite</Link>
        <a href='https://github.com/mrtnprzk'>GitHub</a>
    </header>
  )
}

export default Header