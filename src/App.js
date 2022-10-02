
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Home/Banner/Banner';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import AddToCart from './Main/AddToCart/AddToCart';
import ContactUs from './Main/ContactUs/ContactUs';
import DoctorProfile from './Main/DoctorProfile/DoctorProfile';
import Feedbacks from './Main/Feedbacks/Feedbacks';
import Login from './Main/Login/Login';
import ServiceDetails from './Main/ServiceDetails/ServiceDetails';
import Services from './Main/Services/Services';
import Signup from './Main/Signup/Signup';


function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route
          path="/doctorprofile"
          element={<DoctorProfile></DoctorProfile>}
        ></Route>
        <Route path='/addtocart' element={<AddToCart></AddToCart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
