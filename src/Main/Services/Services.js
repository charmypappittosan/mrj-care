import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import AllService from '../AllServices/AllServices';
import './Services.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Services = () => {
    const [services,setServices]=useState([]);
    const [user]=useAuthState(auth);
    useEffect(
        ()=>{
            fetch("Service.json")
              .then((res) => res.json())
              .then((data) => setServices(data));
        }
        ,[]);
    return (
      <div id="services" className="m-auto ">
        <div>
          <h1 style={{ margin: "50px" }} className="text-center">
            Our Services
          </h1>
        </div>
        <div className="services-container align-items-center justify-content-center">
          {services.slice(0, 6).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
          <Link to="/allservices">See More</Link>
        </div>
      </div>
    );
};

export default Services;