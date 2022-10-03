import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Signup = () => {
    return (
      <div className="w-50 mx-auto">
        <h1 style={{ marginTop: "30px" }} className="text-center">
          Register
        </h1>
        <Form>
          <Form.Group className="form-group mb-3" controlId="formBasicName">
            <Form.Label className="label">Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" required />
          </Form.Group>
          <Form.Group className="form-group mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-group mb-3" controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
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