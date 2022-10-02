import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const notify = () => toast("Wow so easy!");
    return (
        <div className='text-dark'>
           <h1>{serviceId}</h1>
           <Link to="/addtocart"><button onClick={notify}>Add To Cart</button></Link>
        </div>
    );
};

export default ServiceDetails;