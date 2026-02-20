import React from 'react'
import First from './components/first.jsx'
import { createContext } from 'react'

export const UserContext = createContext();

const App = () => {
  const user = {
  name: "Lokesh",
  role: "developer",
  isLoggedIn: true
};

  return (
    <div>
<UserContext.Provider value={user}>
      <First />
      </UserContext.Provider>
      </div>
  )
}

export default App