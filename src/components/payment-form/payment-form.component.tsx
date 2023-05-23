import { CardElement } from '@stripe/react-stripe-js';
import { useStripe, useElements} from '@stripe/react-stripe-js';

import Button from '../button/button.component';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { selectTotalPrice } from '../../store/cart/cart.selectors';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { useState, FormEvent } from 'react';

import styled from 'styled-components';




const StyledPaymentForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: space-between;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.15);

    &:hover {
        box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.2);    
        transition: all 0.3s ease;
    }
`;

const StyledCardContainer = styled.div`
    flex-grow: 1;
    border: 1px solid gray;
    margin: 1rem 0;
    padding: 1rem;
    display: inline-block;
    grid-column: 1/3;
    background-color: #fff;
`;

const PayButton = styled(Button)`
    width: 8rem;
    align-self: end;
    ${({theme}) => theme.mixes.flexCenter};

    @media only screen and (max-width: 45em) {
        min-width: 12rem;
        padding: 0.5rem 1rem;
        line-height: 1.5;
        height: auto;
    }
`

const StyledTotalPrice = styled.span`
    font-size: var(--fz-heading);   
    margin: auto 0;
    @media only screen and (max-width: 45em) {
        font-size: var(--fz-xl);
    }
`;


const PaymentForm  = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectTotalPrice);
    const currentUser = useSelector(selectCurrentUser);
    const [isLoading, setIsLoading] = useState(false);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!stripe||!elements) return;
        setIsLoading(true);

        const response = await fetch('/.netlify/functions/create-payment-intent',{
           method: 'post',
           headers: {
             'Content-Type':'application/json'
           },
           body: JSON.stringify({ amount: amount*100 })  
        }).then(response => response.json()).catch(error => {
            setIsLoading(false);
            alert(error)
        });

        if(!response) return;

        const { paymentIntent: { client_secret } } = await response;
        const cardDetails = elements.getElement(CardElement);

        if(cardDetails === null) return;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Gust'
                }
            }
        });

        setIsLoading(false);

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Succeeded');
            }
        }
    }

    return(
        <StyledPaymentForm onSubmit={paymentHandler}>
            <StyledCardContainer>
                <CardElement/>
            </StyledCardContainer>
            <StyledTotalPrice>Total: ${amount}</StyledTotalPrice>
            <PayButton 
                type='submit'
                buttonType={BUTTON_TYPE_CLASSES.inverted} 
                isLoading={isLoading}
            >Pay Now</PayButton>
        </StyledPaymentForm>
    )
}

export default PaymentForm;