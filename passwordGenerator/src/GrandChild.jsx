import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context'



const GrandChild = () => {
 const userData = useContext(UserContext);
 console.log(userData);
    return (
    <div>GrandChild</div>
  )
}

export default GrandChild