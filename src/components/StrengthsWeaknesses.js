import React, { useEffect, useState } from "react";
import api from "../services/axios";

export default function StrengthsWeaknesses(props) {

  const {id} = props

  const [types, getTypes] = useState([])
  const [text, getText] = useState();


  useEffect(() => {
    api
      .get(`/pokemon/${id}`)
        .then((response) => {
          const data = response.data
          const tipos = data.types[0].type.name
          getTypes(tipos);
        })

        function createText (abc) {
          if (abc === 'grass') {
            getText(`E um pokemon do tipo planta, e sua fraqueza sao pokemons dos tipos: fogo, inseto, voador, venenoso e gelo.`)
          } else if (abc === 'fire') {
            getText(`E um pokemon do tipo fogo, e sua fraqueza sao pokemnos dos tipos: água, terreste e pedra.`)
          } else if (abc === 'water') {
            getText(`E um pokemon do tipo água, e sua fraqueza sao pokemons dos tipos: planta e eletrico.`)
          } else if (abc === 'bug') {
            getText(`E um pokemon do tipo inseto, e sua fraqueza sao pokemons dos tipos: fogo, lutador, venenoso, voador, fantasma e metálico.`)
          } else if (abc === 'normal') {
            getText(`E um pokemon do tipo normal, e sua fraqueza sao pokemons dos tipos: lutador, fantasma e metalico.`)
          } else if (abc === 'poison') {
            getText(`E um pokemon do tipo venenoso, e sua fraqueza sao pokemons dos tipos: venenoso, terra, pedra e metalico.`)
          } else if (abc === 'eletric') {
            getText(`E um pokemon do tipo eletrico, e sua fraqueza sao pokemons dos tipos: elétrico, planta, terra e dragao.`)
          } else if (abc === 'ground') {
            getText(`E um pokemon do tipo terra, e sua fraqueza sao pokemons dos tipos: grama, voador e inseto.`)
          } else if (abc === 'fighting') {
            getText(`E um pokemon do tipo lutador, e sua fraqueza sao pokemons dos tipos: venenoso, voador, psíquico, inseto e fantasma.`)
          } else if (abc === 'psychic') {
            getText(`E um pokemon do tipo psíquico, e sua fraqueza sao pokemons dos tipos: metálico, psíquico e noturno.`)
          } else if (abc === 'rock') {
            getText(`E um pokemon do tipo pedra, e sua fraqueza sao pokemons dos tipos: venenoso, água, lutador e terra.`)
          } else if (abc === 'flying') {
            getText(`E um pokemon do tipo voador, e sua fraqueza sao pokemons dos tipos: gelo, pedra e metálico.`)
          } else if (abc === 'ghost') {
            getText(`E um pokemon do tipo fantasma, e sua fraqueza sao pokemons dos tipos: noturno e metálico.`)
          } else if (abc === 'ice') {
            getText(`E um pokemon do tipo gelo, e sua fraqueza sao pokemons dos tipos: fogo, água, gelo e metálico.`)
          } else if (abc === 'dragon') {
            getText(`E um pokemon do tipo dragão, e sua fraqueza sao pokemons dos tipos: fogo, água, elétrico e planta.`)
          } else if (abc === 'steel') {
            getText(`E um pokemon do tipo metálico, e sua fraqueza sao pokemons dos tipos: fogo, lutador e terra.`)
          } else if (abc === 'dark') {
            getText(`E um pokemon do tipo noturno, e sua fraqueza sao pokemons dos tipos: lutador, metálico e inseto.`)
          } else if (abc === 'fairy') {
            getText(`E um pokemon do tipo fada, e sua fraqueza sao pokemons dos tipos: venenoso e metálico.`)
          }
        }

        createText(types);
  }, [id, types]);

   console.log(text);

  return (
    <div>
      <h2>Fraquezas</h2>
      <p>{text}</p>
    </div>
  )
}
