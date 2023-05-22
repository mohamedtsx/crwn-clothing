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
    ${({theme}) => theme.mixes.flexBetween}
    gap: 1rem;
    width: 100%;
`;

const StyledCardContainer = styled.div`
    flex-grow: 1;
    height: 5rem;
    border: 1px solid gray;
    margin: 1rem 0;
    padding: 1rem;
    display: inline-block;
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
        }).then(response => response.json());

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
            <Button 
                type='submit' 
                buttonType={BUTTON_TYPE_CLASSES.inverted} 
                isLoading={isLoading}
            >Pay Now</Button>
        </StyledPaymentForm>
    )
}

export default PaymentForm;