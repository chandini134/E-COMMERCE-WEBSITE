import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home.jsx';
import StoreNavbar from './components/Navbar/Navbar.jsx';
import Product from './pages/Product/Product.jsx';
import {  Routes, Route } from 'react-router-dom'; 
import Cart from './pages/Cart/Cart.jsx'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{overflow: "hidden"}}>
    <StoreNavbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/cart/:id' element={<Cart/>} />
     </Routes>
  
      
     </div>
    </>
  )
}

export default App
