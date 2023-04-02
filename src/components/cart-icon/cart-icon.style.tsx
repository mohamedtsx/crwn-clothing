import styled from 'styled-components';


export const CartIconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon { 
    width: 2.4rem;
    height: 2.4rem;
  }
`


export const ItemCount = styled.span`
  position: absolute;
  font-size: 1.0rem;
  font-weight: bold;
  bottom: 1.2rem;
  user-select: none;
`
