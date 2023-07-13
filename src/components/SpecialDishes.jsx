import { useContext, useState } from "react"
import Card from "./Card"
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";

function SpecialDishes() {
  // global state menu
  const allMenus = useContext(AllMenuContext)

  let [showPopup, setshowPopup] = useState(false);
  let [currentDish, setcurrentDish] = useState('');

  function showPopupHandler(mealName) {
    setshowPopup(true)
    setcurrentDish(mealName)
  }

  function closePopupHandler() {
    setshowPopup(false)
  }

  let specialDishes = allMenus.map((items, index) => {
 
    if (index < 8) {
      return (
        // card is also reused in Category.jsx
        
        <Card
          item={items}
          showPopupHandler={showPopupHandler}
        />
      )
    }
    else{
      return null;
    }
  }
  )
  console.log(specialDishes);

  return (
    <section className="special-dishes">
      {/* circuit component: popup component will show only if showpopup state have true value*/}
      {showPopup && <Popup
        closeBtn={closePopupHandler}
        currentDish={currentDish}
      />}
      <div className="container">
        {/* add to cart */}
        <AddToCart/>
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
        </div>
        <div className="special-dishes-menu">
          <ul className="flex flex-wrap gap-30">
            {specialDishes}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SpecialDishes
