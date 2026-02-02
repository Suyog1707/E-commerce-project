import axios from "axios";
import { useEffect, useState } from "react";
import Header from '../../components/Header.jsx';
import './HomePage.css';
import ProductsGrid from "./ProductsGrid.jsx";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


function HomePage({ cart, loadCart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get(`${BACKEND_URL}/api/products`);
            setProducts(response.data);
        };

        getHomeData();
    }, []);


    return (
        <>
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}

export default HomePage;