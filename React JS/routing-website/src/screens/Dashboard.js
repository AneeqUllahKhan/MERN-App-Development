import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Messages from './dashboard_screen/Messages'
import Notification from './dashboard_screen/Notification'
import Feedback from './dashboard_screen/Feedback'

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
    

   <Routes>
      <Route path='message' element={<Messages />} />
      <Route path='notification' element={<Notification/>} />
      <Route path='feedback' element={<Feedback />} />
   </Routes>
   </>
  )
}

export default Dashboard
