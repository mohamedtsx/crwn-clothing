import './sign-in-form.style.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { signInAuthWithEmailAndPassword, signInWithGooglePopup} from '../../utils/firebase/firebase';
import { useState } from 'react';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {



    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const handelChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const handelSumit = async (e) => {
        e.preventDefault()
        
        try {
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            alert(error.code);
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const googleSignIn = async () => {
        await signInWithGooglePopup();
    }


    return(
        <div className='sign-up-container'>
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handelSumit}>
                <FormInput labelText='email' type='email' name='email' value={email} onChange={handelChange}/>
                <FormInput labelText='password' type='password' name='password' value={password} onChange={handelChange}/>
                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={googleSignIn}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;