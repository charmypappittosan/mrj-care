import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,Name,image,description}=service;
    const navigate=useNavigate();
    const navigateService=id=>{
        navigate(`/service/${id}`);
    }
    return (
      <div>
        <Card style={{ width: "18rem" }} className="card-container">
          <Card.Img id="card-image" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{Name}</Card.Title>
            <p>{description.slice(0,70)}....</p>
            <Button onClick={() => navigateService(id)} variant="primary">
              View Description
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Service;