import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './Search'
import Detail from './Detail'
import Favorite from './Favorite'
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Search/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
