import CheckoutHeader from './CheckoutHeader.jsx';
import { useState, useEffect } from 'react';
import './CheckoutPage.css';
import axios from 'axios';
import OrderSummary from './order-summary/OrderSummary.jsx';
import PaymentSummary from './PaymentSummary.jsx';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function CheckoutPage({ cart, loadCart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentsummary, setPaymentsummary] = useState(null);

    const updarePaymentSummary = async () => {
        let response = await axios.get(`${BACKEND_URL}/api/payment-summary`)
        setPaymentsummary(response.data);
    }

    useEffect(() => {

        const fetchCheckoutPageData = async () => {

            let response = await axios.get(`${BACKEND_URL}/api/delivery-options?expand=estimatedDeliveryTime`)
            setDeliveryOptions(response.data);

        }

        fetchCheckoutPageData();
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        updarePaymentSummary();
    }, [cart])

    return (
        <>
            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                    <PaymentSummary paymentsummary={paymentsummary} loadCart={loadCart} />
                </div>
            </div>
        </>
    );
}

export default CheckoutPage;