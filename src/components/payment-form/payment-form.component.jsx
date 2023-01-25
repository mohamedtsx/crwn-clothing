import './payment-form.style.css';

import { CardElement } from '@stripe/react-stripe-js';
import { useStripe, useElements} from '@stripe/react-stripe-js';

import Button from '../button/button.component';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';


const PaymentForm  = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe||!elements) return;

        const response = await fetch('/.netlify/functions/create-payment-intent',{
           method: 'post',
           headers: {
             'Content-Type':'application/json'
           },
           body: JSON.stringify({ amount: 1000 })
        });
        const data = await response.json();

        console.log(data);
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
