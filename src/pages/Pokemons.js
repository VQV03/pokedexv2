/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, useEffect} from 'react';
import api from '../services/axios';

import styled from 'styled-components'

import Navbar from '../components/Navbar';
import PokemonListCard from '../components/PokemonListCard'

import arrow_right from '../images/arrow.png'
import arrow_left from '../images/arrow2.png'

export default function Pokemons() {
  const [listCache, saveCache] = useState([])
  const [pokemonList, updateList] = useState([])
  const [allPokemons, getAllPokemons] = useState([])
  const [next, updateNext] = useState('') //Nao consegui terminar
  const [prev, updatePrev] = useState('') //Nao consegui terminar

  const [search, updateSearch] = useState([])
  useEffect(() => {
    api //Utilizando o axios centralizado para pegar os dados da API
      .get('/pokemon/')
      .then((response) => {

        let data = response.data
        saveCache(data.results)
        updateList(data.results)
        updateNext(data.next)
        if(data.previous) updatePrev(data.previous)
      })

    api.get('/pokemon/?limit=250').then((response) => { let data = response.data; getAllPokemons(data.results) })
  }, [])

  function detectInputChange(input){
    updateSearch(input.target.value)

    const query = allPokemons.filter(pokemon => search === pokemon.name)

    if(query.length !== 0){
      updateList(query)
    }else{
      updateList(listCache)
    }
  }

  function loadNextPage(){
    api
      .get(next)
      .then(response => {
        let data = response.data
        saveCache(data.results)
        updateList(data.results)
        updateNext(data.next)
        if(data.previous) updatePrev(data.previous)
      })
  }

  function loadPrevPage(){
    if(prev.length !== 0){
      api
      .get(prev)
      .then(response => {
        let data = response.data
        saveCache(data.results)
        updateList(data.results)
        updateNext(data.next)
        if(data.previous) updatePrev(data.previous)
      })
    }
  }

  return (
    <>
      <Navbar />
      <Page>
      <div className='header-jumbo'>
        <h1>Mais de 250 pokemons pra você escolher o seu favorito</h1>

        <input type={"text"} placeholder={'Digite o nome do pokemon'} value={search} onChange={detectInputChange} onKeyUp={detectInputChange} />

      </div>

      <div className='controllers'>
          <button className='button' onClick={loadPrevPage}><img src={arrow_left} alt="" /></button>
          <button className='button' onClick={loadNextPage}><img src={arrow_right} alt="" /></button>
      </div>

      <PokemonList>
      {
        pokemonList.map((pokemon) => {
          return(
              <PokemonListCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
            )
          })
        }
      </PokemonList>
        </Page>

    </>
  );
}

const Page = styled.section`
  @media (max-width: 768px) {
    max-width: auto;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  .controllers{
      margin: 12px 0;
      display: flex;
      justify-content: right;

      .button{
        background-color: white;
        border: 1px solid ${props => props.theme.colors.light_grey};
        border-radius: 100%;
        padding:  10px 12px;
        margin: 0 4px;

        img{
          max-width: 18px;
        }
      }
    }

  .header-jumbo{
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0px 0;
      padding: 32px 8px;

      h1{
        font-weight: 300;
        margin-bottom: 6px;
      }

      input{
        margin-top: 12px;
        width: 100%;
        border: none;
        border-radius: 16px;
        -webkit-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
        padding: 8px 16px;

      }
    }
`

const PokemonList = styled.div`
    @media (max-width: 768px) {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 24px 24px;
    }

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 24px;
    margin-bottom: 72px;
`
