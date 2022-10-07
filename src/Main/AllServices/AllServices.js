import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllService from "../AllService/AllService";
const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="m-auto ">
      <div>
        <h1 style={{ margin: "50px" }} className="text-center">
          Our Services
        </h1>
      </div>
      <div className="services-container align-items-center justify-content-center">
        {services.map((service) => (
          <AllService key={service.id} service={service}></AllService>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
