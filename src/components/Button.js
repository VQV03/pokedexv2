import React from 'react';
import styled from 'styled-components';

export const MainButton = styled.a`
  display: inline-block;
  color: white;
  font-size: ${props => props.theme.font_size.smaller};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 16px 24px;
  border: none;
  text-decoration: none;

  :hover{
    background-color: ${props => props.theme.colors.primary_darker};
  }
`;

export default function Button(props) {
  return (
    <MainButton href={props.link}>
      <p>{props.text}</p>
    </MainButton>
  );
}
