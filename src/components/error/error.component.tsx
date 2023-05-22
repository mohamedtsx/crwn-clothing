import styled from "styled-components";
import { FirebaseError } from "firebase/app";
import { useDispatch } from "react-redux";
import { clearAuthError } from "../../store/user/user.actions";

type ErrorProps = {
    error: FirebaseError
}


const StyledError = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    display: flex;
    justify-content: left;
    padding: 20px;
    gap: 10px;
    align-items: center;
    border-radius: 0.5rem;
    transition: all 0.8s;
    border: 1px solid red;
    transform: translateX(-50%);

    p {
        color: #c00;
        font-size: var(--fz-md);
    }
    img {
        width: 20px;
    }

`

const RmButton = styled.span`
    ${({theme}) => theme.mixes.flexCenter};
    cursor: pointer;
`;


const Error = ({error}: ErrorProps) => {
    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch(clearAuthError())
    }, 3000);

    return(
        <StyledError>
            <p>{error.code}</p>
            <RmButton onClick={() => dispatch(clearAuthError())}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/1024px-Cross_red_circle.svg.png" 
                />
            </RmButton>
        </StyledError>
    )
}

export default Error;