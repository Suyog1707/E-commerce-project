import dayjs from "dayjs";
import buyAgain from '../../../assets/images/icons/buy-again.png';
import axios from "axios";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router";

function OrderDetailsGrid({ order, loadCart }) {

   const navigate = useNavigate();

    return (

        <div className="order-details-grid">

            {order.products.map((orderProduct) => {

                const addToCart = async () => {
                    await axios.post('/api/cart-items', {
                        productId: orderProduct.productId,
                        quantity: 1
                    });
                    await loadCart();
                    navigate('/checkout');
                };

                return (
                    <Fragment key={orderProduct.productId}>
                        <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderProduct.product.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.product.quantity}
                            </div>
                            <button className="buy-again-button button-primary">
                                <img className="buy-again-icon" src={buyAgain} />
                                <span className="buy-again-message" onClick={addToCart}>Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <Link to={`/tracking/${order.id}/${orderProduct.productId}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </Link>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
}

export default OrderDetailsGrid;