import HomePage from './pages/home/HomePage.jsx'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx'
import OrdersPage from './pages/orders/OrdersPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Router, Routes, Route } from 'react-router'
import './App.css'
import TrackingPage from './pages/TrackingPage/TrackingPage.jsx'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }

    fetchAppData();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<ErrorPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
