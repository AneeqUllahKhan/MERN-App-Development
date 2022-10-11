import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from "../screens/home";
import Services from "../screens/services";
import About from "../screens/about";
import Contact from "../screens/contact";
import Notfound from "../screens/notfound";
import Profile from "../screens/profile";

export default function ReactRouter() {
  return (
    <Router>
      
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="services" element={<Services/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="profile/:id" element={<Profile/>} />
            <Route path="*" element={<Notfound/>} />

        </Routes>

    
    </Router>
  );
}

