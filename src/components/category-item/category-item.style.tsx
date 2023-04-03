import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`}
`

export const CategoryBodyContainer = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 0.6rem 0;
    font-size: 2.2rem;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 1.6rem;
  }
`

export const CategoryContainer = styled.div`
  min-width: max(30%, 18rem);
  height: 24rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryBodyContainer} {
      opacity: 0.9;
    }
  }


  ${'' /* &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  } */}
`