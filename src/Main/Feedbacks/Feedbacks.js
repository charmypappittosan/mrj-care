import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../../image/carousel1.jpg';
import logo1 from '../../image/carousel2.jpg';
import logo2 from '../../image/carousel1.jpg';
import logo3 from '../../image/feedback.png';
import './Feedbacks.css';

const Feedbacks = () => {
    return (
      <div id="feedbacks">
        <h1
          style={{
            textAlign: "center",
            margin: "30px"
          }}
        >
          Happy Client
        </h1>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "800px" }}
              className="d-block w-100"
              src={logo}
              alt="First slide"
            />

            <Carousel.Caption>
              <div className="st">
                <div className="d-flex">
                  <p style={{ fontSize: "20px" }}>
                    <img id="logo" src={logo3} alt="" />
                    Behavior of this doctor is very aristocratic, we are very
                    impressed by them, most doctors are good, some junior
                    consultants are also good, the food is excellent and waiters
                    are also excellent, three years ago we did a bypass surgery
                    here - United Hospital was in full swing then full of
                    ambience and life
                  </p>
                </div>
                <div style={{ marginLeft: "30px" }} className="d-flex">
                  <p style={{ fontSize: "20px" }}>
                    <img id="logo" src={logo3} alt="" />
                    Recently visited health check up department of Apollo
                    Hospital for a whole body check up. The entire process from
                    check in to the end was seamless. The staff at the health
                    check department was courteous, helpful and very attentive.
                    I would highly recommend this hospital to anyone looking for
                    something similar services.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "800px" }}
              className="d-block w-100"
              src={logo1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="st">
                <div className="d-flex">
                  <p style={{ fontSize: "20px" }}>
                    <img id="logo" src={logo3} alt="" />
                    IOne particular duty sister is very good and even with leg
                    pain she was running around doing so much and the food
                    service is the best thing in the hospital, food service and
                    food excellent
                  </p>
                </div>
                <div style={{ marginLeft: "20px" }} className="d-flex">
                  <p style={{ fontSize: "20px" }}>
                    <img id="logo" src={logo3} alt="" />
                    The care and hospitality is very incredible besides healty
                    treatment , tests & consultations for my father. I highly
                    recommend everyone to visit the hospital. Thank you.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "800px" }}
              className="d-block w-100"
              src={logo2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="d-flex">
                <p style={{ fontSize: "30px" }}>
                  <img id="logo" src={logo3} alt="" />
                  Service is more or less fine, I can see how much everyone is
                  doing, I really feel for the nurses and other ward staff and
                  how much they are doing, I sympathize with the caregivers for
                  all their work and effort in taking care of patients in
                  Covid-19 pandemic, everyone going the extra mile so from that
                  point of view he must admit service is fine
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Feedbacks;