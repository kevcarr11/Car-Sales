import React from 'react'
import { Link } from "react-router-dom"
import  tesla  from "../img/tesla.jpg";

const Starter = () => {
  return (
    <>
      <div className="boxes"> 
        <div className="box">
          <h1 className="title">Choose a Car:</h1>
          <Link to="/mustang">
            <h2 className="subtitle">Mustang</h2>
            <img className="homeImg"src='https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg' alt="ford mustang"/>
          </Link>
        </div>
        <div className="box">
          <h1 className="title">Choose a Car:</h1>
          <Link to="/tesla">
            <h2 className="subtitle">Tesla</h2>
            <img src={tesla} alt="tesla"/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Starter
