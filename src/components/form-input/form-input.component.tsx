import { InputHTMLAttributes, FC } from 'react';

import { Group, FormIn, FormInputLabel } from './form-input.style';


type FormInputProps = {
    labelText: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({labelText, ...otherProps}) => {
    // for check if there are no value prop or there are but empty string

    const labelValue = Boolean(
        otherProps.value && 
        typeof otherProps.value==='string' &&
        otherProps.value.length
    );

    return(
        <Group>
            <FormIn {...otherProps}/>
            <FormInputLabel shrink={labelValue}>{labelText}</FormInputLabel>
        </Group>
    )
}

export default FormInput;