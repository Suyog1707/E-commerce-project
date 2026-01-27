import Header from '../../components/Header.jsx';
import axios from 'axios';
import OrderGrid from './orders-grid/OrderGrid.jsx';
import { useState, useEffect } from 'react';
import './OrdersPage.css';


function OrdersPage({ cart }) {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrderGrid orders={orders} />
            </div>
        </>
    );
}

export default OrdersPage;