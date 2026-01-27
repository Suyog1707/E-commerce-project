import CheckoutHeader from './CheckoutHeader.jsx';
import { useState, useEffect } from 'react';
import './CheckoutPage.css';
import axios from 'axios';
import OrderSummary from './order-summary/OrderSummary.jsx';
import PaymentSummary from './PaymentSummary.jsx';

function CheckoutPage({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentsummary, setPaymentsummary] = useState(null);

    useEffect(() => {

        const fetchCheckoutPageData = async () => {

            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary')
            setPaymentsummary(response.data);
        }

        fetchCheckoutPageData();
    }, []);

    return (
        <>
            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
                    <PaymentSummary paymentsummary={paymentsummary} />
                </div>
            </div>
        </>
    );
}

export default CheckoutPage;