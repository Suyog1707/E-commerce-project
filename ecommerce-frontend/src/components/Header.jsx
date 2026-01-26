import { Link } from 'react-router'
import logoWhite from "../assets/images/logo-white.png";
import mobileLogoWhite from "../assets/images/mobile-logo-white.png"
import cartIcon from "../assets/images/icons/cart-icon.png"
import searchIcon from "../assets/images/icons/search-icon.png"
import './header.css'

function Header({ cart }) {

    let totalQuantity = 0;

    cart.forEach((cartItems) => {
        totalQuantity += cartItems.quantity;
    });

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo"
                            src={logoWhite} />
                        <img className="mobile-logo"
                            src={mobileLogoWhite} />
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src={searchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={cartIcon} />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;