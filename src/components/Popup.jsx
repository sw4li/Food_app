import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext';
import { DispatchContext } from '../context/AppProvider';

// props destructured
function Popup({ closeBtn, currentDish }) {
  // global state menu
const allMenus = useContext(AllMenuContext);

  // global dispatch
const dispatch = useContext(DispatchContext)

  let fullDishDetail = allMenus.filter((menuItem) => {
    return menuItem.strMeal === currentDish
  }).map((item) => {
    return (
      <div>
        <div className='flex'>
          <div className='popup-content-data'>
            <div className="popup-image">
              <img src={item.strMealThumb} alt='product'></img>
              <h4>MRP: 250 Rs.</h4>
            </div>

            <div className='popup-text'>
              <h2>{item.strMeal}</h2>
              <h3>{item.strCategory}</h3>
            </div>
          </div>

          <div className='popup-description'>
            <h4>Description</h4>
            <p>{item.strInstructions}</p>
          </div>
        </div>

        <button onClick={()=>dispatch({type:"add_to_cart",payload:{image:item.strMealThumb,name:item.strMeal}})}>Order now</button>
        <h4 className='popup-close' onClick={closeBtn}>Close</h4>
      </div>
    )
  })

  return (
    <div className='popup'>
      <div className="popup-content">
        {fullDishDetail}
      </div>
    </div>
  )
}

export default Popup
