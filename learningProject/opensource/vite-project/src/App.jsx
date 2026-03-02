import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Navbar from './components/common/Navbar'
import Pages from './components/layout/Pages'
import Products from './components/product/Products'
import About from './Pages/About'
import Cart from './Pages/Cart'
const App = () => {

  return (
    <>
      <Routes>
        <Route element={<Pages />} path='/items'>
          <Route path='/items/' element={<Home />} />
          <Route path='/items/about' element={<About />} />
          <Route path='/items/cart' element={<Cart />} />
          <Route path='/items/products' element={<Products />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}

export default App