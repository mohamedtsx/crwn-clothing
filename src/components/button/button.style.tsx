import styled from 'styled-components';

export const BaseBtn = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  overflow: hidden;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
 
  &:hover {
    background-color: #fff;
    color: black;
    border: 1px solid black;
  }

  &:active {
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  }
`

export const GoogleSignInBtn = styled(BaseBtn)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    color: #fff;
    border: none;
  }
`

export const InvertedBtn = styled(BaseBtn)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`