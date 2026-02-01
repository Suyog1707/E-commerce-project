import Header from '../../components/Header.jsx';
import axios from 'axios';
import OrderGrid from './orders-grid/OrderGrid.jsx';
import { useState, useEffect } from 'react';
import './OrdersPage.css';


function OrdersPage({ cart, loadCart }) {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersPageData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data);
        }

        fetchOrdersPageData();
    }, []);

    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrderGrid orders={orders} loadCart={loadCart} />
            </div>
        </>
    );
}

export default OrdersPage;