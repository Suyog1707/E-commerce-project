import HomePage from './pages/HomePage.jsx'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { Router, Routes, Route } from 'react-router'
import TrackingPage from './pages/TrackingPage.jsx'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
