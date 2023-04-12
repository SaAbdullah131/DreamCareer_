import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from './component/Home/Home';

const App = () => {
  return (
    <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  );
};

export default App;