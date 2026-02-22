import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './UserContext/UserContextProvider.jsx'
import { BrowserRouter } from "react-router-dom";createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </UserContextProvider>  
</BrowserRouter>
)
