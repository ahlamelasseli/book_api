import React from 'react';
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className=' h-screen'>
      <nav className='flex justify-between items-center  p-4'>
        <h1 className='text-[#537D5D] font-bold'>LiBRARY</h1>
        <div className='flex gap-4 text-[#73946B]'>
          <a href="">home</a>
          <a href="">blog</a>
          <a href="">about us</a>
        </div>
        <button className='p-3 bg-[#537D5D] text-white rounded-xl hover:bg-[73946B]'>Sign up</button>
      </nav>
           
           <Home />

    </div>
  );
};

export default App;