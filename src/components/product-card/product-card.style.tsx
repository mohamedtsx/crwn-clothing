import styled from "styled-components";
import Button from "../button/button.component";


export const ProductCardContainer = styled.div`
  ${({theme}) => theme.mixes.flexCenter};
  flex-direction: column;
  height: 35rem;
  position: relative;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: block;
      }
    }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const CardButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 25.5rem;
  display: none;
`;

export const Caption = styled.div`
    ${({theme}) => theme.mixes.flexBetween}
    width: 100%;
    height: 5%;
    font-size: var(--fz-lg);  
    padding-right: 1rem;
`;