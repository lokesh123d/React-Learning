import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile'
import Login from './Components/Login'

const App = () => {
  return (
    <div>
    
<Routes>
  <Route path={'/'} element={<Login/>}/>
<Route path={'/profile'} element={<Profile/>}/>
</Routes>
    </div>
  )
}

export default App