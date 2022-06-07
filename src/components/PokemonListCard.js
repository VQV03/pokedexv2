/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import api, { getPokemonImageUrl } from '../services/axios';

import styled from 'styled-components'
import { type_colors } from "../styles/type-colors";

import PokemonDetails from "./PokemonDetails";

function PokemonListCard(props) {
    const [pokemon, setPokemon] = useState([])
    const [types, getTypes] = useState([])

    const [mainType, getMainType] = useState('')
    const [mainColor, getColor] = useState('')

    const [showModal, updateModal] = useState(false) // <--

    const [formatedId, getFormatedID] = useState();

    const id = props.url.split('/')[6]

    useEffect(()=>{
        api
        .get(`/pokemon/${id}`)
        .then((response) => {
            const data = response.data
            setPokemon(data)
            getTypes(data.types)
            getMainType(data.types[0].type.name)

            type_colors.forEach((el) => {
                const getName = Object.keys(el)[0]
                if(getName === data.types[0].type.name){
                    getColor(Object.values(el)[0])
                }

            })
        })

        function formatId (a) {
          if (a < 10) {
            getFormatedID(`#00${a}`);
          } else if (a >= 10 && a < 100){
            getFormatedID(`#0${a}`);
          } else {
            getFormatedID(`#${a}`);
          }
        }
        formatId(id);
    },[])

    return(
        <>
        {showModal && <PokemonDetails data={pokemon} id={id} color={mainColor} value={showModal} handleRender={updateModal} />}
        <Card style={{backgroundColor: mainColor}} onClick={updateModal}>

            <div className="id-box">
                <p>{formatedId}</p>
            </div>

            <div className="card-details">
                <p className="name">{pokemon.name}</p>
                {
                    types.map((type) => {
                    return(
                        <div key={type.type.name}>
                            <div  className="type">{type.type.name}</div>
                        </div>
                    )
                    })
                }
            </div>
            <div className="card-image">
                <img src={getPokemonImageUrl(id)} alt={pokemon.name} />
            </div>

        </Card>
        </>
    )
}

export default PokemonListCard

const Card = styled.div`
    cursor: pointer;
    position: relative;
    background: #c0c0c0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    overflow: hidden;

    .card-details{
        position: relative;
        z-index: 1;
        color: white;

        .name{
            text-transform: capitalize;
            margin-bottom: 4px;
        }

        .type{
            text-transform: capitalize;
            display: inline-block;
            background-color: rgba(255, 255, 255, .2);
            padding: 4px 8px;
            border-radius: 16px;
            font-size: ${props => props.theme.font_size.smaller}
        }
    }

    .card-image{
        max-width: 50%;
        position: absolute;
        right: 6px;
    }

    .id-box{
        position: absolute;
        color: rgba(0, 0, 0, .3);
        top: 5%;
        right: 5%;
    }

`
