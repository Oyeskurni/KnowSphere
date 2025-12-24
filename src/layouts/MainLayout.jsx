import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';


const MainLayout = () => {


    return (
        <div className="min-h-screen flex flex-col">
            <div className='border-b border-gray-200 sticky top-0 bg-base-100 z-50 '>
                <Navbar></Navbar>
            </div>
            <main className="flex-1 bg-gray-100"><Outlet></Outlet></main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;