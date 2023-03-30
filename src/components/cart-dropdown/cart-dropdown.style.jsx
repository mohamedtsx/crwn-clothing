import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 9999;

  .button {
    margin-top: auto;
  }
`

export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`

export const CartItems = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const HiddenContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #00000029;
  
`