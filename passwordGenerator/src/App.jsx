import { useState } from 'react'
import Child from './Child'
import { useContext } from 'react'
import { UserContext } from './Context'
import Parent from './Parent'
import { DataProvider } from './Context2'

function App() {

const userData = useContext(UserContext);
console.log(userData);
  return (
    <DataProvider>
      <Parent />
      <Child />
    </DataProvider>
  )
}

export default App
