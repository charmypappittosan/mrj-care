import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OtherLogin from '../OtherLogin/OtherLogin';
import ResetPassword from '../ResetPassword/ResetPassword';
import './Login.css';
const Login = () => {
  const navigate=useNavigate();
  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,] = useSignInWithEmailAndPassword(auth);
    const handleSubmit=event=>{
      event.preventDefault();
      const email=event.target.email.value;
      const password=event.target.password.value;
      signInWithEmailAndPassword(email,password);
    }
    if(user){
      navigate("/home");
    }
    if (error) {
        errorElement=<p className='text-danger'>Error: {error.message}</p>
    }
      return (
        <div className="mx-auto w-50">
          <h2 style={{ marginTop: "20px" }} className="text-center">
            Log in
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button
              className="w-50  mx-auto d-block mb-5 mt-5"
              variant="primary"
              type="submit"
            >
              Log in
            </Button>
            {errorElement}
          </Form>
          <p>
            New to MRJ-CARE?{" "}
            <Link className="text-decoration-none" to="/signup">
              Click here for Regiter
            </Link>
          </p>
          <p>
            Forgot Your Password?
            <Link to="/resetpassword" className="text-decoration-none">Reset Your Password</Link>
          </p>
          <OtherLogin></OtherLogin>
        </div>
      );
};

export default Login;