import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/otherLogin/github.png';
import logo1 from '../../image/otherLogin/google.png';
import Loading from '../../Others/Loading/Loading';
import './OtherLogin.css';

const OtherLogin = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    const handleGoogleSignIn=()=>{
        signInWithGoogle();
    }
    const handleGithubSignIn=()=>{
        signInWithGithub();
    }
    if(user || user1){
        navigate("/home");
    }
    if(loading || loading1){
        return <Loading></Loading>
    }
    return (
      <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50 mx-2"></div>
          <p className="mt-2">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50 mx-2"></div>
        </div>

        <button onClick={handleGoogleSignIn} className="signin-btn d-block mx-auto">
          <img style={{ width: "30px" }} className="mt-2" src={logo1} alt="" />
          <span>Sign In With Google </span>
        </button>
        <div>
          <button onClick={handleGithubSignIn} className="signin-btn d-block mx-auto">
            <img style={{ width: "30px" }} className="mt-2" src={logo} alt="" />
            <span>Sign In With Github </span>
          </button>
        </div>
      </div>
    );
};

export default OtherLogin;