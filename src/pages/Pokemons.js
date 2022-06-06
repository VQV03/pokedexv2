/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, useEffect} from 'react';
import api from '../services/axios';

import styled from 'styled-components'

import Navbar from '../components/Navbar';
import PokemonListCard from '../components/PokemonListCard'

export default function Pokemons() {

  const [pokemonList, updateList] = useState([])
  const [next, updateNext] = useState('') //Nao consegui terminar
  const [prev, updatePrev] = useState('') //Nao consegui terminar

  const [search, updateSearch] = useState('')
  useEffect(() => {
    api //Utilizando o axios centralizado para pegar os dados da API
      .get('/pokemon/')
      .then((response) => {

        let data = response.data

        updateList(data.results)
        updateNext(data.next)
        if(data.previous) updatePrev(data.previous)
      })
  }, [])


  return (
    <>
      <Navbar />
      <Page>
      <div className='header-jumbo'>
        <h1>Mais de 250 pokemons pra você escolher o seu favorito</h1>
        <input type={"text"} placeholder={'Digite o nome do pokemon'} value={search} onChange={e => updateSearch(e.target.value)}/>
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 24px;
`
