import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main; 