import './payment-form.style.css';

import { CardElement } from '@stripe/react-stripe-js';
import { useStripe, useElements} from '@stripe/react-stripe-js';

import Button from '../button/button.component';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { selectTotalPrice } from '../../store/cart-items/cart-items.selectors';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selectors';


const PaymentForm  = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectTotalPrice);
    const currentUser = useSelector(selectCurrentUser);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe||!elements) return;

        const response = await fetch('/.netlify/functions/create-payment-intent',{
           method: 'post',
           headers: {
             'Content-Type':'application/json'
           },
           body: JSON.stringify({ amount: amount })  
        }).then(response => response.json());

        const { paymentIntent: { client_secret } } = await response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Gust'
                }
            }
        });

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Succeeded');
            }
        }
    }

    return(
        <form className='payment-container' onSubmit={paymentHandler}>
            <div className='payment_form-container'>
                <CardElement/>
            </div>
            <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
        </form>
    )
}

export default PaymentForm;
