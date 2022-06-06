/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled from 'styled-components'

import { getPokemonImageUrl } from '../services/axios'
import ProgressBar from "./ProgressBar";
import Description from "./Description";

import close_icon from '../images/closeIcon.png';

function PokemonDetails (props) {
    const pokemon = props.data
    const image_id = props.id
    const color = props.color

    const [pokemonHeatlh, updateHealth] = useState(null)

    useEffect(() => {
        updateHealth({
            get abilities() {
                return pokemon.abilities;
            },
            get weight() {
                return (pokemon.weight * 0.1).toFixed(2);
            },
            get height() {
                return (pokemon.height * 0.1).toFixed(2);
            },
        });
    }, [])

    function passToParent(){
        props.handleRender()
    }

    return(
        <Modal>
            <div className="modal-content" onClick={passToParent}>
                <div className="close-modal">
                    <img src={close_icon} alt="" />
                </div>
                <div className="pokemon-image" style={{backgroundColor: color}}>
                    <img src={getPokemonImageUrl(image_id)} alt={pokemon.name} />
                </div>
                <div className="pokemon-data">
                    <h2 className="pokemon-name" style={{color: color}} >{pokemon.name}</h2>

                    <div className="health-data">
                        <div className="highlight">
                            <div>
                                <p>{pokemonHeatlh?.weight}Kg</p>
                            </div>
                            <p className="text-label">Peso</p>
                        </div>
                        <div className="highlight">
                            <div>
                                <p>{pokemonHeatlh?.height}m</p>
                            </div>
                            <p className="text-label">Altura</p>
                        </div>
                        <div className="highlight">
                            <div>
                                <p>{pokemonHeatlh?.abilities[0].ability.name}</p>
                            </div>
                            <p className="text-label">Poder Principal</p>
                        </div>
                    </div>

                    <Description color={color} stat={Number(image_id)} />

                    <div className="power-data">
                        <div className="power-row">
                            <div>
                                <p>Ataque</p>
                            </div>
                            <div>
                                <p>{pokemon?.stats[0].base_stat}</p>
                            </div>
                            <div>
                                <ProgressBar completed={pokemon?.stats[0].base_stat} />
                            </div>
                        </div>
                        <div className="power-row">
                            <div>
                                <p>Defesa</p>
                            </div>
                            <div>
                                <p>{pokemon?.stats[1].base_stat}</p>
                            </div>
                            <div>
                                <ProgressBar completed={pokemon?.stats[1].base_stat} />
                            </div>
                        </div>
                        <div className="power-row">
                            <div>
                                <p>Vl. Ataque</p>
                            </div>
                            <div>
                                <p>{pokemon?.stats[2].base_stat}</p>
                            </div>
                            <div>
                                <ProgressBar completed={pokemon?.stats[2].base_stat} />
                            </div>
                        </div>
                        <div className="power-row">
                            <div>
                                <p>Total</p>
                            </div>
                            <div>
                                <p>{pokemon?.stats[3].base_stat}</p>
                            </div>
                            <div>
                                <ProgressBar completed={pokemon?.stats[3].base_stat} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default PokemonDetails

const Modal = styled.div`
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        max-width: 100%;
    }

    .close-modal{
        position: absolute;
        top: 12px;
        right: 18px;
        z-index: 100;
        cursor: pointer;

        img{
            height: 18px;
        }
    }

    .modal-content{
        @media (max-width: 768px) {
            height: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 0;
        }

        position: relative;
        background-color: white;
        display: flex;
        border-radius: 16px;
    }

    .power-data{
        p{
            font-size: ${props => props.theme.font_size.default}
        }

        .power-row{
            padding: 8px 0;
            display: grid;
            grid-template-columns: 0.8fr 0.5fr 3fr;
            grid-template-rows: 1fr;
            gap: 20px 0px;
            align-items: center;
            justify-content: center;
        }
    }

    .pokemon-data{
        @media (max-width: 768px) {
            width: 100%;
        }

        padding: 32px;
        width: 50%;

        .pokemon-name{
            text-transform: capitalize ;
            font-size: ${props => props.theme.font_size.heading};
            font-weight: 600;
        }

        .health-data{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                gap: 0px 0px;
                margin: 32px 0;

            .text-label{
                color: ${props => props.theme.colors.medium_grey};
                font-size: ${props => props.theme.font_size.smaller}
            }

            .highlight{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-right: 1px solid ${props => props.theme.colors.light_grey};

                :last-child{
                    border-right: none;
                }
            }
        }
    }

    .pokemon-image{
        @media (max-width: 768px) {
            max-width: 100%;
            border-radius: 0;
        }

        max-width: 50%;
        border-radius: 16px;
    }
`
