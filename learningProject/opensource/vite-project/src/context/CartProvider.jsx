import React, { createContext, useState } from 'react'

export const cartContext = createContext()
const CartProvider = ({children}) => {
    const [cartData, setcartData] = useState([]);
    return (
    <div>
<cartContext.Provider value={[cartData,setcartData]}>
    {children}
</cartContext.Provider>
        
    </div>
  )
}

export default CartProvider