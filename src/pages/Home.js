import React from 'react'
import {Link} from "react-router-dom"
import Banner from "../assets1/Pizza2.jpg"
import '../style/Home.css'


export const Home = () => {
  return (
    <div className="home" style={{backgroundImage:`url(${Banner})` }}>
        <div className="HeaderContainer" >
          <h1>Pizza Hut</h1>
          <p>PIZZA TO FIT ANY TAST</p>
          <Link to='/menu'>
            <button>Order Now</button>
          </Link>
        </div>

    </div>
  )
}
