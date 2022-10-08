import React from 'react';

const Blogs = () => {
    return (
      <div>
        <div>
          <h4>
            What is the difference between Authorization and Authentication?
          </h4>
          <p>
            Authentication is the checking from authority about the user. Simply
            we can say the user identification by using some unique data. Every
            user have some unique key or data to identify as an individual and
            using that unique key for indentify a user is called authentication.
            Authorization is the term which hold the access right.It comes after
            the authentication. Determining the perticular user's access right
            is Authorization.
          </p>
        </div>
        <div>
          <h4>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h4>
          <p>
            Firebase authentication provides many advance feature comparing to
            other authentication site. It has a rich ui library,built in api and
            many backend services. There are many providers that firebase gives
            you to use.Such as,facebook,twitter,email,gooogle e.t.c.
          </p>
        </div>
        <div>
          <h4>
            What other services does firebase provide other than authentication
          </h4>
          <p>
            There are many services that frebase provides other than
            authentication. Such as{" "}
            <ul>
              <li>Hosting</li>
              <li>Cloud Firestore</li>
              <li>Crashlytics</li>
              <li>Cloud Message</li>
              <li>A/B Testing</li>
            </ul>
          </p>
        </div>
      </div>
    );
};

export default Blogs;