import React from 'react'
import { UserContext } from '../App.jsx'
import { useContext } from 'react'
const first = () => {
 const user = useContext(UserContext);
    return (

    <div>first components
        {console.log(user)}
    </div>
  )
}


export default first