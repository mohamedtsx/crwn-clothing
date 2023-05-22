import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    min-height: 10rem;
    border-bottom: 1px solid var(--darkgrey);
    padding: 1.5rem 0;
    font-size: var(--fz-xl);
    width: 100%;


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

    .controller {
        width: max(140px, 30%);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media only screen and (max-width: 45em) {
        font-size: var(--fz-md);
        .name {
            max-width: 12rem;
        }
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




/*

.checkout-item-container {
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 10rem;
    border-bottom: 1px solid darkgrey;
    padding: 1.5rem 0;
    font-size: 2rem;

    .image-container {
        width: 23%;
        padding-right: 1.5rem;
        
        img {
            width: 100%;
            height: 100%;
        }
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
}

.controller {
    width: max(140px, 30%);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media only screen and (max-width: 45em) {
    .checkout-item-container {
        font-size: 1.6rem;
    }
}
*/