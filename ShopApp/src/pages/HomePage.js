import React from 'react'
import '../assets/style/home.scss'
const img = require('../assets/bag1.jpg'); // with require
const small2 = require('../assets/bag2.jpg'); // with require
const small3 = require('../assets/bag3.jpg'); // with require
const small4 = require('../assets/bag4.jpg'); // with require




export const HomePage = () => {
  return (
    <div className='app-Container'>
      <div className="app-content">
        <div className="app-big-content">
          <div className="app-text">
            <div className="app-title">
              <h1>Discover Our Curated Collection</h1>
            </div>
            <div className="app-sub-title">
              <p>explore out carreful selected products for your home and lifestyle
              </p>
            </div>
            <div className="app-button-item">
              <button className='Btn'>Shop Now</button>
            </div>
          </div>
          <div className="app-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="app-small-content">
          <div className="app-item">
            <img src={small2} alt="" />
          </div>
          <div className="app-item">
            <img src={small3} alt="" />
          </div>

          <div className="app-item">
            <img src={small4} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

