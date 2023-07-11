import React,{useContext} from 'react'
import { StateContext } from '../context/AppProvider'

const Checkout = () => {

  // const cartPackage = useContext(StateContext);
  let cartFromLocal =JSON.parse(localStorage.getItem('cartItems'));

  let cartItem =cartFromLocal.cartItems.map((item) => {
    return (
        <div className='checkout-item-container'>
            <img src={item.image} alt="product image" />
            <h6>{item.name}</h6>
        </div>
    )
})
  return (
    <div className='checkout'>
      <div className='checkout-container'>
       {cartItem}
      </div>
    </div>
  )
}

export default Checkout
