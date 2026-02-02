import axios from "axios";
import formatMoney from "../../../../utils/money";
import DeliveryOptions from "./DeliveryOptions";
import { useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function CartItemDetailsGrid({ cartItem, deliveryOptions, loadCart }) {

    const deleteCartItem = async () => {
        await axios.delete(`${BACKEND_URL}/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const [quantity, setQuantity] = useState(cartItem.quantity);
    const [isUpdating, setIsUpdating] = useState(false);

    const addQuantityBox = () => {
        setIsUpdating(true);
    };

    const updateingQuentity = (event) => {
        setQuantity(event.target.value);
    };

    const updateQuentityOnBackend = async () => {
        await axios.put(`${BACKEND_URL}/api/cart-items/${cartItem.productId}`, {
            quantity: Number(quantity)
        });
        await loadCart();
        setIsUpdating(false);
    };

    const whenEnterKeyHit = (event) => {
        if (event.key === 'Enter')
            updateQuentityOnBackend();
        else if (event.key === 'Escape') {
            setQuantity(cartItem.quantity);
            setIsUpdating(false);
        }
    }

    return (
        <div className="cart-item-details-grid">
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: <span className="quantity-label">
                            {isUpdating && <input
                                value={quantity}
                                type="text"
                                className="quantity-input-box"
                                style={{ width: 50 }}
                                onChange={updateingQuentity}
                                onKeyDown={whenEnterKeyHit}
                            />}
                            {cartItem.quantity}
                        </span>
                    </span>
                    <span className="update-quantity-link link-primary" onClick={isUpdating ? updateQuentityOnBackend : addQuantityBox}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
            <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
        </div>
    );
}

export default CartItemDetailsGrid;