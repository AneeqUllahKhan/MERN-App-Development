import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../screens/About'
import Contact from '../screens/Contact'
import Home from '../screens/Home'
import Notfound from '../screens/NotFound'
import Services from '../screens/Services'
import Navbar from '../components/Navbar'
import Dashboard from '../screens/Dashboard'

export default function ReactRouter() {
  return (
    <Router>

        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='dashboard/*' element={<Dashboard/>}/>
            <Route path='*' element={<Notfound/>}/>

        </Routes>
    </Router>
  )
}


