import styled from "styled-components"

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1.5rem;

  img {
    width: 30%;
  }
`


export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;

  .name {
    font-size: 1.6rem;
  }

  .empty-message {
    text-align: center;
  }
`
