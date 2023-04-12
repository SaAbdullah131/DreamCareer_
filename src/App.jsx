import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from './component/Home/Home';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  );
};

export default App;