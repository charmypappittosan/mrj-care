import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Others/Loading/Loading';
import OtherLogin from '../OtherLogin/OtherLogin';
import './Login.css';
const Login = () => {
  
  const navigate=useNavigate();
  const location=useLocation();
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
    var from=location.state.from.pathname || "/";

    if(loading){
      return <Loading></Loading>
    }

    
    if(user){
      navigate(from, {replace:true});
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