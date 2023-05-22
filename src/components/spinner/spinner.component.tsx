import styled from "styled-components";

const SpinnerOverlay = styled.div`
  ${({theme}) => theme.mixes.flexCenter};
  height: 60vh;
  width: 100%;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 0.3rem solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  -webkit-animation: spin 1s ease-in-out infinite;
  animation: spin 1s ease-in-out infinite;
`;

const Spinner = () => {
    return(
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    )
}

export default Spinner;