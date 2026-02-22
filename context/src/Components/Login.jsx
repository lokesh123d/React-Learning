import React from 'react'
import { useState } from 'react'
import { UserContext } from '../UserContext/UserContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('')
const {setUserData} = useContext(UserContext);

    function handleSubmit(){
const newUser ={
    userName,
    password
} 
setUserData(newUser);
navigate('/profile')
    }
  return (
    <div>

        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  />
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}  />
        <button onClick={handleSubmit}>Login Here</button>
    </div>
  )
}

export default Login