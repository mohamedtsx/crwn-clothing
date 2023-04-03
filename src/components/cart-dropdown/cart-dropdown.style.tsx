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
  right: 2vw;
  z-index: 999;

  .button {
    margin-top: auto;
  }

  @media screen and (max-width: 75em) {
    margin-right: 2rem;
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

export const Back = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  animation: background 200ms linear;
  background-color: #00000029;

  @keyframes background {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`
