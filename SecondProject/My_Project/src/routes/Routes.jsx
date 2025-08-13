import React from "react";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Courses from "../pages/Courses";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="courses" element={<Courses/>}/>
        </Routes>
      </Router>
    );
  }
  export default AppRoute;