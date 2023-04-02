import {  FC, ButtonHTMLAttributes} from 'react';
import { BaseBtn, GoogleSignInBtn, InvertedBtn } from './button.style';


export enum BUTTON_TYPE_CLASSES {
    google = 'google-sign-in',
    inverted = 'inverted',
    base = 'base'
}

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;


const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseBtn => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseBtn,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn,
    }[buttonType]);



const Button: FC<ButtonProps> = ({
    buttonType, 
    children, 
    isLoading, 
    ...otherProps
}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {isLoading ? '...' : children}
        </CustomButton>
    )
}

export default Button;