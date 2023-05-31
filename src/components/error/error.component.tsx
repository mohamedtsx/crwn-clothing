import styled from "styled-components";
import { FirebaseError } from "firebase/app";
import { useDispatch } from "react-redux";
import { clearAuthError } from "../../store/user/user.actions";

import CloseIcon from '../../assets/close.svg';

type ErrorProps = {
    error: FirebaseError
}


const StyledError = styled.div`
  background-color: #ffebeb;
  border: 1px solid #ff7f7f;
  color: red;
  padding: 1rem 2rem;
  margin-bottom: 10px;
  width: fit-content;

  z-index: 100;
  border-radius: 4px;
  display: flex;
  gap: 15px;

  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%);

`;

const RmButton = styled.span`
    ${({theme}) => theme.mixes.flexCenter};
    cursor: pointer;
`;


const Error = ({error}: ErrorProps) => {
    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch(clearAuthError())
    }, 6000);

    return(
        <StyledError>
            <p>{error.code}</p>
            <RmButton onClick={() => dispatch(clearAuthError())}>
                <img src={CloseIcon}/>
            </RmButton>
        </StyledError>
    )
}

export default Error;