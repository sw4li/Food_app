import React from 'react'

const Checkout = () => {

  let cartFromLocal = JSON.parse(localStorage.getItem('cartItems'));

  let cartItem = cartFromLocal.cartItems.map((item) => {
    return (
      <div className="checkout-container-item flex">
        <img src={item.image} alt="product image" />
        <h4>{item.name}</h4>
        <h4>1</h4>
      </div>
    )
  })

  return (
    <div className='checkout'>
      <div className='checkout-container flex'>
        <div className='checkout-container-items'>
          {/* <div className="checkout-container-item flex">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMMQ5SiGdHRhfFPiil9ealFjmJFBNmY_B3FywVUM&s" alt="product image" />
            <h4>apple</h4>
            <h4>1</h4>
          </div> */}
          {cartItem}
        </div>
        <div className='checkout-container-totals'>
          <h1>Checkout Total</h1>
          <div className='checkout-container-total'>
            <h2>MRP:499</h2>
            <button>Make Payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
