import React from 'react'
import loadSvg from "../assets/loadSvg.svg"


function Loader() {
    return (
        <div className="loader">
            <img src={loadSvg} alt="" />
            <h1>Loading</h1>
        </div>
    )
}

export default Loader
