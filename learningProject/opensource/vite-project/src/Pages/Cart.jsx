import React from 'react'
import useAccessRole from '../utils/Access'

const Cart = () => {
        useAccessRole('/items/cart')
  return (
    <div>
<h1 className='text-center mt-10 text-2xl'>Cart Products</h1>
<div>

</div>

    </div>
  )
}

export default Cart