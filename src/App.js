/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home';
import Pokemons from './pages/Pokemons';

//Utilizei o Router pra fazer o direcionamento entre os componentes da pokedex

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemons" element={<Pokemons />} />
      </Routes>
    </>
    )
}

export default App;
