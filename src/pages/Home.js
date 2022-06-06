import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Navbar from '../components/Navbar';

import image_pikachu from '../images/homepageImage.png';


export default function Home() {
  return (
    <>
      <Navbar />
      <Page>
        <div className='content'>
          <div>
            <div className="page-text">
              <h1>Qual pokemon você escolheria<span className='yellow-bar'></span>?</h1>
              <p>
                Você pode saber o tipo de pokemon, seus pontos fortes, fracos e
                habilidades
              </p>
            </div>
            <Button text={'Veja todos os pokemons!'} link={'/pokemons'}/>
          </div>
        </div>
        <img src={image_pikachu} alt="Pikachu" className='main-image' />
      </Page>
    </>
  );
}


const Page = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  overflow-x: hidden !important;

  .main-image{
    z-index: -1;
    position: absolute;
    right: -150px;
    max-height: 80vh;
  }

  .content{
    margin: 0 10vw;
    max-width: clamp(42%, 42% ,1100px);

    .page-text{
      h1{
        font-size: ${props => props.theme.font_size.heading};
        position: relative
      }

      p{
        line-height: 1.2;
        max-width: 64%;
        font-size: ${props => props.theme.font_size.default};
        margin: 24px 0px;
      }

      /* .yellow-bar{
        background: ${props => props.theme.colors.primary};
        position: absolute;
        width: 50%;
        height: 25px;
        top: 150px;
        left: 0;
        bottom: 0;
      } */
    }

  }`

