import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer>
        <p>©{year} <a href='https://www.linkedin.com/in/martin-parizek-b32ab4152/'>mrtnprzk</a></p>
    </footer>
  )
}

export default Footer