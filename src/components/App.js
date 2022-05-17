import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage'
import DetailPage from './DetailPage'
import FavoritePage from './FavoritePage'
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<SearchPage/>}/>
        <Route path='/detail/:imdbID' element={<DetailPage/>}/>
        <Route path='/favorite' element={<FavoritePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
