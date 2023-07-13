import React, { useState } from 'react'
import Payment from "./PaymentModal/Payment"

const Checkout = () => {

  let cartFromLocal = JSON.parse(localStorage.getItem('cartItems'));

  let cartItem = cartFromLocal.cartItems.map((item) => {
    return (
      <div className="checkout-container-item flex">
        <img src={item.image} alt="product" />
        <h4>{item.name}</h4>
        <h4>1</h4>
      </div>
    )
  })

  let [isOpen, setIsOpen] = useState(false);

  const buyItem = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Payment isOpen={isOpen} setIsOpen={setIsOpen} cartItem={cartItem} />
      <div className='checkout'>
        <div className='checkout-container flex'>
          <div className='checkout-container-items'>
            {cartItem.length>0?cartItem:<h2>Cart is Empty</h2> }
          </div>
          <div className='checkout-container-totals'>
            <h1>Checkout Total</h1>
            <div className='checkout-container-total'>
              {cartItem.length>0?<h3>MRP:699.00 Rs</h3>:<h3>MRP:0.00 Rs</h3>}
              <button onClick={buyItem}>Make Payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
