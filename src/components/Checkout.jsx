import React,{useContext} from 'react'
import { StateContext } from '../context/AppProvider'

const Checkout = () => {

  const cartPackage = useContext(StateContext);

  let cartItems = cartPackage.cartItems.map((item) => {
    return (
        <>
            <img src={item.image} alt="product image" />
            <h6>{item.name}</h6>
        </>

    )
})

  return (
    <div className='checkout'>
      <div className=''>
        <h2>checkout</h2>
       {cartItems}
      </div>
    </div>
  )
}

export default Checkout
