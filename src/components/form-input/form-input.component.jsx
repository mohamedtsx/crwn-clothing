import { Group, FormIn, FormInputLabel } from './form-input.style.jsx';

const FormInput = ({labelText, ...otherProps}) => {
    // for check if there are no value prop or there are but empty string

    const labelValue = (otherProps.value && otherProps.value.length);

    return(
        <Group>
            <FormIn {...otherProps}/>
            <FormInputLabel shrink={labelValue}>{labelText}</FormInputLabel>
        </Group>
    )
}

export default FormInput;