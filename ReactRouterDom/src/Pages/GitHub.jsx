import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/lokesh123d')
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <userContext.Provider value={userData}>
      {children}
    </userContext.Provider>
  );
};

const GitHub = () => {
 
    const [responseData, setResponseData] = useState('');
    useEffect(() => {
  async function fetchData() {
  const response = await axios.get('https://api.github.com/users/lokesh123d')
  console.log(response.data);
  
  setResponseData(response.data)
  }
  fetchData();
}, []);

  return (
    <div><img src={responseData.avatar_url} alt="" />
    <h1 className='text-6xl'>{responseData.bio}</h1>
    <a href={responseData.blog} className='text-4xl'>Portfolio</a>
    </div>
  )
}

export default GitHub