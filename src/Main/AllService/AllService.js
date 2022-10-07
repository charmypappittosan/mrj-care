import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./AllService.css";

const AllService = ({service}) => {
    const { id, Name, image } = service;
    const navigate = useNavigate();
    const navigateService = (id) => {
      navigate(`/service/${id}`);
    };
    return (
      <div>
        <Card style={{ width: "18rem" }} className="card-container">
          <Card.Img id="card-image" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{Name}</Card.Title>
            <Button onClick={() => navigateService(id)} variant="primary">
              View Description
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default AllService;