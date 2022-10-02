import React from 'react';
import logo from '../../image/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner d-flex ">
        <div
          style={{ color: "white", paddingLeft: "20px" }}
          className=" m-auto align-items-center justify-content-center"
        >
          <h1 className="banner-text">We Care For Your Betterness</h1>
          <p className="banner-text">
            We take our every patient with sinciarity and care.<br></br> We
            provide an healthy environment for treatment.<br></br> You find the
            world best technology here<br></br> and a complete pharmacy.
          </p>
          <button className='banner-btn'>Explore More</button>
        </div>
        <div>
          <img id="banner-img" src={logo} alt=""></img>
        </div>
      </div>
    );
};

export default Banner;