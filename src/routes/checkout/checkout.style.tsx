import styled from "styled-components";

export const Checkout = styled.div`
    width: 55%;
    min-width: 60rem;
    min-height: 90%;
    margin: auto;
`;

export const MetaData = styled.ul`
    ${({theme}) => theme.mixes.flexBetween};
    justify-self: center;
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid var(--darkgrey);

    /* li {
        text-transform: capitalize;
        width: 23%;

        &:last-child {
            width: 8%;
        }
    } */
`;

export const TotalPrice = styled.span`
    margin-top: 3rem;
    margin-left: auto;
    font-size: var(--fz-heading);   
`;