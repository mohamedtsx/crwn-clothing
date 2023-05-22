import SignIn from '../../components/sign-in-form/sign-in-form.component';
import SignUp from '../../components/sign-up-form/sign-up-form.component';
import styled from 'styled-components';


const StyledAuthentication = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
    max-width: 90rem;
    margin: 3rem auto;
`;

const Authentication = () => {

    return(
        <StyledAuthentication>
            <SignIn/>
            <SignUp/>
        </StyledAuthentication>
    )
}

export default Authentication;