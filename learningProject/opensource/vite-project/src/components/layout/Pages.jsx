import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Pages