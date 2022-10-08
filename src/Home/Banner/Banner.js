import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/banner.jpg';
import './Banner.css';

const Banner = () => {
  const navigate=useNavigate();
  const handleExplore=()=>{
    navigate("/allservices");
  }
    return (
      <div className="banner">
        <div
          style={{ color: "white", paddingLeft: "20px" }}
          className="banner-heading m-auto align-items-center justify-content-center"
        >
          <h1 className="banner-text">We Care For Your Betterness</h1>
          <p className="banner-text">
            We take our every patient with sinciarity and care.<br></br> We
            provide an healthy environment for treatment.<br></br> You find the
            world best technology here<br></br> and a complete pharmacy.
          </p>
          <button onClick={handleExplore} className='banner-btn'>Explore More</button>
        </div>
        <div>
          <img id="banner-img" src={logo} alt=""></img>
        </div>
      </div>
    );
};

export default Banner;