import HomePage from './pages/home/HomePage.jsx'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx'
import OrdersPage from './pages/orders/OrdersPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Router, Routes, Route } from 'react-router'
import './App.css'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cart-items?expand=product')
      .then((responce) => {
        setCart(responce.data);
      })
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="*" element={<ErrorPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
