import './sign-up-form.style.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useState } from 'react';
import { signUpStart } from '../../store/user/user.actions';
import { useDispatch } from 'react-redux';


const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handelSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('both password not the same');
            return;
        };

        try {
            dispatch(signUpStart(email,password,name));
            resetFormFields();
        } catch(error) {
            alert(error.code)
        }
    }

    const handelChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    
    return(
        <div className='sign-up-container'>
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handelSubmit}>
                <FormInput labelText='name' type='text' name='name' value={name} onChange={handelChange}/>
                <FormInput labelText='email' type='email' name='email' value={email} onChange={handelChange}/>
                <FormInput labelText='password' type='password' name='password' value={password} onChange={handelChange}/>
                <FormInput labelText='confirm password' type='password' name='confirmPassword' value={confirmPassword} onChange={handelChange}/>
                <Button type='submit'>Sign up</Button>
            </form>
        </div>
    )
}

export default SignUp;