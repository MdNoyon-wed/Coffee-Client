import React from 'react';
import Navber from './header/Navber';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
   
      <Navber></Navber>
      <div className="max-w-7xl mx-auto">
       <Outlet></Outlet>

      </div>
   
      
    </div>
  );
};

export default MainLayout;