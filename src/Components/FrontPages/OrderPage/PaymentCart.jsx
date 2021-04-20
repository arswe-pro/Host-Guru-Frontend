import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Alert, Button } from 'antd';

const CheckoutForm = ({ handlePayment }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentError(null);
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <>
            { paymentError && <Alert message={paymentError} type="error" showIcon />}
            { paymentSuccess && <Alert message="Payment Success " type="success" showIcon action={<Button size="small" type="text">UNDO </Button>} closable />}
            <br/>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br/>
                <button type="submit" disabled={!stripe} style={{width:'100%' , padding:'0.5rem 0', backgroundColor:'#ccc'}}> Pay </button>
            </form>




        </>



    );
};

export default CheckoutForm;