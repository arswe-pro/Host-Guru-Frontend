import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './PaymentCart';
import { Card, Col, Row } from 'antd';

const stripePromise = loadStripe('pk_test_51IhzEUKZicJcbdtFmYa2VE1Xqj8F2sDEKPnkMOP6riA1A8T22znnNZ2zecwVIBsrpykmQv5rKehOK0SR0mqxcxrd003VRRNvVl');

const PaymentOption = ({ handlePayment }) => {
    return (
        <div style={{marginTop:'5rem'}}>
            <Row justify="center" >
                <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
                    <Card title=" Give Your Account details ">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm handlePayment={handlePayment} />
                        </Elements>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PaymentOption;