import axios from "axios";
import { useState, useEffect } from "react";
import CartItemDetailsGrid from "./cart-item-details-grid/CartItemDetailsGrid";
import DeliveryDate from "./DeliveryDate.jsx";

function OrderSummary({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            })
    }, [])

    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

                const selectDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                });

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate selectDeliveryOption={selectDeliveryOption} />
                        <CartItemDetailsGrid cartItem={cartItem} deliveryOptions={deliveryOptions} />
                    </div>
                );
            })}
        </div>
    );
}

export default OrderSummary;