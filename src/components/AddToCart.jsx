import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { StateContext,DispatchContext } from '../context/AppProvider';


const AddToCart = () => {

    const cartPackage = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    let cartItems = cartPackage.cartItems.map((item) => {
        return (
            <div className='item-container'>
                <FontAwesomeIcon className='closeIcon' icon={faCircleXmark} onClick={()=>{dispatch({type:'remove_cart',payload:{name:item.name}})}} />
                <img src={item.image} alt="product_image" />
                <h6>{item.name}</h6>
           
            </div>

        )
    })

    return (
        <div className= "add-to-cart-wrapper">
            <div className="add-to-cart-item">
                <div className='item-container'>
                    <h6>your cart</h6>
                    {cartItems}
                </div>
            </div>
        </div>
    )
}

export default AddToCart

