import { BaseBtn, GoogleSignInBtn, InvertedBtn } from './button.style.jsx';


export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    base: 'base'
}

const getButton = (buttonType = 'base') => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseBtn,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn
    }[buttonType]);

const Button = ({buttonType, children, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button;