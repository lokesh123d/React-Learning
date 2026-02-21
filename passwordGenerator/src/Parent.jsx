import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context'
import { DataContext } from './Context2'
const Parent = () => {
    const userData = useContext(DataContext);
    console.log(userData);
    return (
        <div>Parent</div>
    )
}

export default Parent