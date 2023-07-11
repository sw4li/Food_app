import React, { useState } from 'react'

function Pagination(props) {

    let [activePagination,setactivePagination]=useState(1)
    // number of items considering as no:of pages
    let numberOfPages = [];
    for (let i = 1; i <= Math.ceil(props.filteredDishes.length / props.perPage); i++) {
        numberOfPages.push(i);
    }
    // current page updation on click
    function paginationClick(pageNumber) {
        props.setcurrentPage(pageNumber)
        setactivePagination(pageNumber)
    }
    // pages count rendering
    let pages = numberOfPages.map((page) => {
        return <li className={activePagination === page ? "active" :" "} onClick={() => { paginationClick(page) }} > {page} </li>
    })

    return (
        <section>
            <ul className='pagination flex'>
                {pages}
            </ul>
        </section>
    )
}

export default Pagination
