/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

import logo_pokemon from '../images/logoImage.png';

export default function Navbar() {
  return (
    <Nav>
      <div className='content'>
        <a className="logo-box" href='/'>
          <img src={logo_pokemon} alt="Pokédex!" />
        </a>
        <div className='navigation'>
            <a href="/">Home</a>
            <a href="/pokemons">Pokemons</a>
            <a href="mailto:vitorvqv@gmail.com">Contato</a>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: white;
  -webkit-box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.1); 
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.1);
  height: 80px;
  display: flex;
  align-items: center;

  .content{
    width: 100%;
    margin: 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-box {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 45px;
    }
  }

  .navigation{
      padding: 16px;

      a {
        position: relative;
        color: #000;
        text-decoration: none;
        margin: 0 12px;
      }

      a:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -11px;
        left: 0;
        border-radius: 10px;
        background-color: #000;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
    
      a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
  }
`;