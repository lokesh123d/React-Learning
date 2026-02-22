import React from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import GitHub from './Pages/GitHub'
import Params from './Pages/Params'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/git-hub' element={<GitHub/>}/>
        <Route path='/:parms' element={<Params/>}/>
      </Routes>
{/* <Home/>
<Contact />
<About /> */}
<Footer />


    </div>
  )
}

export default App