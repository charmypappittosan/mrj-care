import React from 'react';
import { Button, Form } from 'react-bootstrap';


import './Login.css';
const Login = () => {
    return (
      <div className="mx-auto w-50">
        <h2 style={{ marginTop: "20px" }} className="text-center">
          Log in
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button
            className="w-50  mx-auto d-block mb-5 mt-5"
            variant="primary"
            type="submit"
          >
            Log in
          </Button>
        </Form>
      </div>
    );
};

export default Login;