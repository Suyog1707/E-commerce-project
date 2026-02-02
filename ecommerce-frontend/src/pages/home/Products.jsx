import formatMoney from "../../utils/money";
import axios from "axios";
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Products({ product, loadCart }) {

    const [quantity, setQuantity] = useState(1);

    const selectQuantity = (event) => {
        const quantitySelected = Number(event.target.value);
        setQuantity(quantitySelected);
    };

    const [yourState, setYourState] = useState(false)
    const showAdded = () => {
        setYourState(true)

        setTimeout(() => {
            setYourState(false)
        }, 2000);
    }

    const addToCart = async () => {
        await axios.post(`${BACKEND_URL}/api/cart-items`, {
            productId: product.id,
            quantity
        });
        await loadCart();
    };



    return (
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={product.image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {formatMoney(product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={selectQuantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart" style={{ opacity: yourState ? 1 : 0 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDwaDOGfqAcWdLGxdWKZ3GdPMA1kuZ2S2-g&s" />
                Added
            </div>

            <button className="add-to-cart-button button-primary"
                onClick={() => { addToCart(); showAdded(); }}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Products;