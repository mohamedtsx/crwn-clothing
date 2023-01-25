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
  z-index: 5;

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
