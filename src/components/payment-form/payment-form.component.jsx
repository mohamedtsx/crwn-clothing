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


    }

    return(
        <div className='payment-container'>
            <div className='payment_form-container'>
                <CardElement/>
            </div>
            <Button 
                buttonType={BUTTON_TYPE_CLASSES.inverted} 
                onClick={paymentHandler}
            >Pay Now</Button>
        </div>
    )
}

export default PaymentForm;
