import { useState, FormEvent, ChangeEvent } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { emailSignInStart, googleSignInStart } from '../../store/user/user.actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


export const StyledSignUp = styled.div`
    display: flex;
    flex-direction: column;
    width: 38rem;

    h2 {
        margin: 1rem 0;
        color: var(--title)
    }

    span { 
        color: var(--text);
    }
`
const StyledButtons = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    gap: 15px;
`


const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const dispatch = useDispatch()

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            dispatch(emailSignInStart(email,password));
            resetFormFields();
        } catch(error) {
            console.log('user sign in failed', error);
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const googleSignIn = () => {
        dispatch(googleSignInStart());
    }


    return(
        <StyledSignUp>
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handelSubmit}>
                <FormInput 
                    labelText='email' 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={handelChange} 
                    required
                />
                <FormInput 
                    labelText='password' 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handelChange} 
                    required
                />
                <StyledButtons>
                    <Button type='submit'>Sign in</Button>
                    <Button 
                        buttonType={BUTTON_TYPE_CLASSES.google} 
                        type='button' 
                        onClick={googleSignIn}
                    >Google sign in</Button>
                </StyledButtons>
            </form>
        </StyledSignUp>
    )
}

export default SignIn;