import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAccessRole from '../utils/Access';

const Home = () => {
useAccessRole('/items');

  return (
    <div className='text-5xl flex justify-center items-center mt-66 text-cyan-600'>
Welcome Lokesh



    </div>
  )
}

export default Home