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

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<ErrorPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
