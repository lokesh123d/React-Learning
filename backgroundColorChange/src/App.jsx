import { useState } from 'react'
import Color from './Color.jsx';

function App() {
const colorCollection = ['red','blue','white','black','yellow','green','pink','purple'];



  return (
    <>
<Color colorCollection={colorCollection} />    
    </>
  )
}

export default App
