import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='bg-amber-200 flex justify-between p-10'>
      <div>Logo</div>
      <div className='text-3xl gap-8 flex'>
        <Link to={'/items'}>Home</Link>
        <Link to={'/items/products'}>All Products</Link>
        <Link to={'/items/about'}>About</Link>
        <Link to={'/items/cart'}>Cart</Link>
        <Link to={'/login'}>Login</Link>
        <button onClick={handleLogout} className="bg-red-300 px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  )
}

export default Navbar