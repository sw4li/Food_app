import React from 'react'

function Card(props) {

    return (
        <li>
            <a href="/#" onClick={(e) => {
                 e.preventDefault()
                props.showPopupHandler(props.item.strMeal)
            }}>
                <img src={props.item.strMealThumb} alt="" />
                <h5>{props.item.strMeal}</h5>
            </a>
        </li>
    )
}

export default Card
