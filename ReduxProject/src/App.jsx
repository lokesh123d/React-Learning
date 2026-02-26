import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div className='bg-gray-950 w-full h-screen text-white'>
      
      <button onClick={()=>{
        fetchPhotos('human')
      }}
        className='bg-green-400 px-2 py-1 m-3 border-0 rounded-md'
      >Get Photos</button>


        <button onClick={()=>{
        fetchVideos('human')
      }}
              className='bg-green-400 px-2 py-1 m-3 border-0 rounded-md'
      >Get Videos</button>



       <button onClick={()=>{
        fetchGIF('human')
      }}
              className='bg-green-400 px-2 py-1 m-3 border-0 rounded-md'
      >Get GIF</button>
    </div>
  )
}

export default App