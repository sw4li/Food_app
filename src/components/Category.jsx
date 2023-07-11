import { useContext, useState,useEffect } from "react"
import Pagination from "./Pagination"
import Card from "./Card"
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";

function Category(props) {
    // global state menu
    const allMenus = useContext(AllMenuContext);

    let [category, setCategory] = useState([])

    // get all category
    async function getAllCategory() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URL);
        let categoryData = await response.json()
        setCategory(categoryData.categories)
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    // initial Random dish is selected as Beef category
    let beefCategory = allMenus.filter((item) => {
        return item.strCategory === "Beef"
    }).map((item) => {
        return (
            <Card
                item={item}
                showPopupHandler={showPopupHandler}
            />
        )
    })


    let [showPopup, setshowPopup] = useState(false);
    let [currentDish, setcurrentDish] = useState('')

    function showPopupHandler(mealName) {
        setshowPopup(true)
        setcurrentDish(mealName)
    }

    function closePopupHandler() {
        setshowPopup(false)
    }


    // initialise to filtered state
    let [filtered, setFiltered] = useState(beefCategory)
    let [activeCategory, setactiveCategory] = useState("Beef")
    let menuDishes;
    let [currentPage, setcurrentPage] = useState(1);
    let [itemsPerPage, setitemsPerPage] = useState(4);

    let indexOfLastDish = currentPage * itemsPerPage;
    let indexOfFirstDish = indexOfLastDish - itemsPerPage;

    let showSliced = filtered.slice(indexOfFirstDish, indexOfLastDish)


    function showDishHandler(category) {
        setactiveCategory(category)
        menuDishes = allMenus.filter((item) => {
            return item.strCategory === category
        }).map((item) => {
            return (
                // card is also reused in SpecialDishes.jsx
                <Card item={item}
                    showPopupHandler={showPopupHandler} />
            )
        })
        setFiltered(menuDishes)
    }

    let categories = category.map((item) => {
        return (
            <li className={item.strCategory === activeCategory ? "active" : ""} onClick={() => { showDishHandler(item.strCategory) }}>
                {item.strCategory}</li>
        )
    })

    return (
        <div className="Category-dishes">
            {showPopup && <Popup
                closeBtn={closePopupHandler}
                currentDish={currentDish}
            />}
            <div className="container">
                <div className="Category-dishes-content text-center">
                    <h2>Choose your Dishes</h2>
                    <p>Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
                </div>
                <div className="Category-dishes-list">
                    <ul>
                        {categories}
                    </ul>
                </div>
                <div className="Category-dishes-show">
                    <ul className="flex flex-wrap gap-30">
                        {filtered.length != 0 ? showSliced :
                            <div className="alert">
                                <h3>Dishes are currently unavailable!</h3>
                                <h4>Please choose another one.</h4>
                            </div>}
                    </ul>
                </div>

                <Pagination
                    filteredDishes={filtered}
                    perPage={itemsPerPage}
                    setcurrentPage={setcurrentPage}
                />

            </div>
        </div>
    )
}

export default Category