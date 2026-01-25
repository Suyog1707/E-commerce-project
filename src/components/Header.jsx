import { Link } from 'react-router'
import logoWhite from "../assets/images/logo-white.png";
import mobileLogoWhite from "../assets/images/mobile-logo-white.png"
import cartIcon from "../assets/images/icons/cart-icon.png"
import searchIcon from "../assets/images/icons/search-icon.png"
import './header.css'

function Header() {
    return (
        <>
            <div class="header">
                <div class="left-section">
                    <Link to="/" class="header-link">
                        <img class="logo"
                            src={logoWhite} />
                        <img class="mobile-logo"
                            src={mobileLogoWhite} />
                    </Link>
                </div>

                <div class="middle-section">
                    <input class="search-bar" type="text" placeholder="Search" />

                    <button class="search-button">
                        <img class="search-icon" src={searchIcon} />
                    </button>
                </div>

                <div class="right-section">
                    <Link class="orders-link header-link" to="/orders">

                        <span class="orders-text">Orders</span>
                    </Link>

                    <Link class="cart-link header-link" to="/checkout">
                        <img class="cart-icon" src={cartIcon} />
                        <div class="cart-quantity">3</div>
                        <div class="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;