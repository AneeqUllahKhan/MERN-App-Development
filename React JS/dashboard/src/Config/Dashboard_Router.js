import React from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard_main from "../Screens/dashboard_screen/Dashboard_main";
import Email from '../Screens/dashboard_screen/Email';
import Feedback from '../Screens/dashboard_screen/Feedback';
import Inbox from '../Screens/dashboard_screen/Inbox';
import Notifications from '../Screens/dashboard_screen/Notifications';
import Sales from '../Screens/dashboard_screen/Sales';


const DashboardRouter = () => {
  return (
    <>      
      <Routes>
        <Route path='/' element={<Dashboard_main/>} />
        <Route path='Email' element={<Email/>} />
        <Route path='Feedback' element={<Feedback/>} />
        <Route path='Inbox' element={<Inbox/>} />
        <Route path='Notifications' element={<Notifications/>} />
        <Route path='Sales' element={<Sales/>} />
      </Routes>
    </>
  );
};

export default DashboardRouter;
