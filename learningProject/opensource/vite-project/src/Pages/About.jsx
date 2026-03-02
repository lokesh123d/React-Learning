import React from 'react'
import useAccessRole from '../utils/Access'

const About = () => {
    useAccessRole('/items/about')
  return (
    <div className='text-5xl flex justify-center items-center mt-66 text-cyan-600'>
Hello I am Lokesh I am a admin of this website.
    </div>
  )
}

export default About