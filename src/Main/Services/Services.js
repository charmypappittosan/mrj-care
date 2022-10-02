import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';

const Services = () => {
    const [services,setServices]=useState([]);
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
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;