import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Home/Footer/Footer";
import Header from "./Home/Header/Header";
import Home from "./Home/Home/Home";
import DoctorProfile from "./Main/DoctorProfile/DoctorProfile";
import Signup from "./Authentication/Signup/Signup";
import ServiceDetails from "./Main/ServiceDetails/ServiceDetails";
import Login from "./Authentication/Login/Login";
import ResetPassword from "./Authentication/ResetPassword/ResetPassword";
import NotFound from "./Others/NotFound/NotFound";
import AllServices from "./Main/AllServices/AllServices";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import Checkout from "./Main/Checkout/Checkout";
import Blogs from "./Main/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/doctorprofile"
          element={<DoctorProfile></DoctorProfile>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/allservices"
          element={<AllServices></AllServices>}
        ></Route>
        <Route
          path="/resetpassword"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route
          path="/allservice/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
