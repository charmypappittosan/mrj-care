import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from '../../image/maria.jpg';
import './DoctorProfile.css';

const DoctorProfile = () => {
    return (
      <div>
        <div>
          <h1>About Me</h1>
        </div>
        <div className="about-me">
          <div className="d-flex">
            <div>
              <img style={{ width: "200px" }} src={pic} alt="" />
            </div>
            <div>
              <p className="mt-5 ml-5">
                Hello, I am Dr. Maria Jahan. I am Internal Medicine Specialist
                doctor in Dhaka. My Professional qualification is MBBS (DMC),
                BCS (Health), MD (Internal Medicine). I am an Assistant
                Professor in the Department of Medicine at Sheikh Hasina Medical
                College Hospital, Dhaka. I regularly provide treatment to my
                patients at 
                <span style={{ color: "skyblue", display: "inline",fontSize:"20px" }}>
                  MRJ-CARE Hospital
                </span>
                on Friday and Saturday from 4pm to 9pm.
              </p>
            </div>
          </div>
          <div className="appointment-container m-auto align-items-center justify-content-center">
            <p className="book-title">Haven't booked yet?</p>
            <h5 style={{ marginBottom: "10px" }}>Name:</h5>
            <input
              style={{ marginBottom: "30px" }}
              type="text"
              placeholder="Your Name"
            />
            <h5 style={{ marginBottom: "10px" }}>Date</h5>
            <input
              style={{ marginBottom: "30px" }}
              type="date"
              placeholder="Appointment Date"
            />
            <h5 style={{ marginBottom: "10px" }}>Time</h5>
            <input
              style={{ marginBottom: "30px" }}
              type="time"
              placeholder="Appointment Time"
            />
            <Link to="/addtocart">
              <Button varient="primary" className="d-block">
                Book For Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default DoctorProfile;