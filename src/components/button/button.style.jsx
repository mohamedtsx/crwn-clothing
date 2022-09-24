import styled from 'styled-components';

export const BaseBtn = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
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
    border: none;
  }
`

// I want all buttons to contine the base btn style !