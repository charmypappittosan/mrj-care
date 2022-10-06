import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
   const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
   const navigate=useNavigate();
   const handleSubmit=event=>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    createUserWithEmailAndPassword(email,password);
   }
   if(user){
    navigate("/home");
    console.log('user created');
   }
  
    
    return (
      <div className="w-50 mx-auto">
        <h1 style={{ marginTop: "30px" }} className="text-center">
          Register
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group mb-3" controlId="formBasicName">
            <Form.Label className="label">Full Name</Form.Label>
            <Form.Control
              type="text"
              name='name'
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="form-group mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control
              type="email"
              name='email'
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-group mb-3" controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              type="password"
              name='password'
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="form-group mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
          </Form.Group>
          <Button
            className="mx-auto d-block w-50"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </div>
    );
};

export default Signup;