import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Others/Loading/Loading';

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    let errorElement;
     if (error) {
           errorElement=<p className='text-danger'>Error: {error.message}</p>
     }
    if(sending){
       return <Loading></Loading>;
    }

    return (
      <div>
        <Form className="w-50 mx-auto">
          <h1 className="text-center mt-3 mb-3">Reset Password</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{fontSize:"18px"}}>Email address</Form.Label>
            <Form.Control 
            className='mt-2 mb-5'
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button
            onClick={async () => {
              await sendPasswordResetEmail(email);
              alert("email sent");
            }}
            className="d-block mx-auto w-50"
            variant="primary mt-2"
            type="submit"
          >
            Update Password
          </Button>
          {errorElement}
          <ToastContainer></ToastContainer>
        </Form>
      </div>
    );
};

export default ResetPassword;