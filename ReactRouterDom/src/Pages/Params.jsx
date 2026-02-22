import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Params = () => {
    // const [first, setfirst] = useState('')
const {parms} = useParams()

  return (
    <div className='bg-blue-400 text-6xl py-5 px-9 flex items-center justify-center text-white h-40'>
{parms}
    </div>
  )
}

export default Params