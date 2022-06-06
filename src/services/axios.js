import axios from 'axios'; //Fazendo dessa forma a captura das APIs se torna mais organizada

export const getPokemonImageUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default api;
