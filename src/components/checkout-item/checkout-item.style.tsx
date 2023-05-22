import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
    ${({theme}) => theme.mixes.flexCenter};
    min-height: 10rem;
    border-bottom: 1px solid var(--darkgrey);
    padding: 1.5rem 0;
    font-size: var(--fz-xl);
    width: 100%;


    .name, .quantity, .price {
        width: 23%;
    }

    .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .quantity {
        display: flex;

        .arrow {
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;
        }

        .value {
            margin: 0 1rem;
        }
    }

    .removeBtn {
        border: none;
        background: none;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 1.5rem;
    
    img {
        width: 100%;
        height: 100%;
    }
`;