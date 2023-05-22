import styled, { css } from 'styled-components';


const shrinkLabelStyle = css`
    top: -1.4rem;
    font-size: var(--fz-xxs);
    color: var(--black);
`

export const Group = styled.div`
    position: relative;
    margin: 4.5rem 0;

    input[type='password'] {
        letter-spacing: 0.3rem;
    }
`
type FormInputLabelProps = {
    shrink?: boolean
}

export const FormInputLabel = styled.label`
    color: var(--input-sub);
    font-size: 1.6rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.5rem;
    top: 1rem;
    transition: 300ms ease all;

    ${({shrink}: FormInputLabelProps) => shrink && shrinkLabelStyle};
`


export const FormIn = styled.input`
    background: none;
    background-color: white;
    color: var(--input-sub);
    font-size: 1.8rem;
    padding: 1rem 1rem 1rem 0.5rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--input-sub);
    margin: 2.5rem 0;

    &:focus {
        outline: none;
    }

    &:focus ~ ${FormInputLabel} {
        ${shrinkLabelStyle}
    }
`
