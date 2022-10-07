import React from 'react';
import './Footer.css';
import logo from "../../image/doctor.png";
import logo1 from '../../image/copyright.png';
import logo2 from '../../image/location.png';
import logo3 from '../../image/telephone.png';



const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
    return (
      <div
        style={{ color: "rgba(255, 255, 255, 0.55)"}}
        className="  container-footer text-center"
      >
        <div
          style={{ color: "rgba(255, 255, 255, 0.55)" }}
          className="text-footer"
        >
          <div style={{ marginTop: "50px" }} className="text-center">
            <h1 style={{ color: "rgba(255, 255, 255, 1)" }}>MRJ-CARE</h1>
            <img style={{ width: "65px" }} src={logo} alt="" />
            <p>always stays with you</p>
          </div>
          <div style={{ marginTop: "50px" }} className="text-center">
            <h4>
              <img id="logos" src={logo2} alt="" /> 140 Manik Mia Avenue, Dhaka
            </h4>
            <h4>
              <img id="logos" src={logo3} alt="" /> 02345678
            </h4>
          </div>
        </div>
        <p style={{paddingRight:'5px'}}>
          <img style={{marginTop:"5px"}} id="small-logo" src={logo1} alt=""/>{year}.Dr.Maria Jahan.All Right
          Reserved
        </p>
      </div>
    );
};

export default Footer;