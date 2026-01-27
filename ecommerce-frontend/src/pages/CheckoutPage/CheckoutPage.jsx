import CheckoutHeader from './CheckoutHeader.jsx';
import { useState, useEffect } from 'react';
import './CheckoutPage.css';
import axios from 'axios';
import OrderSummary from './order-summary/OrderSummary.jsx';
import PaymentSummary from './PaymentSummary.jsx';

function CheckoutPage({ cart }) {


    const [paymentsummary, setPaymentsummary] = useState(null);

    useEffect(() => {
        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentsummary(response.data);
            });
    }, []);

    return (
        <>
            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} />
                    <PaymentSummary paymentsummary={paymentsummary} />
                </div>
            </div>
        </>
    );
}

export default CheckoutPage;