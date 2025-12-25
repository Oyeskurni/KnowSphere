import React, { use } from 'react';
import { Link } from 'react-router';
import NavLinks from './NavLinks';
import logo from '../assets/sharing-idea.jpg';
import HamMenu from './HamMenu';
import { AuthContext } from '../context/AuthContext';
import Profile from './Profile';


const Navbar = () => {
    const { user } = use(AuthContext);
    return (
        <div className="navbar max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex gap-2 md:gap-4 lg:gap-6 ">

            {/* 🔹 LEFT */}
            <div className="navbar-start flex flex-3 gap-4">
                <div className='md:hidden'>
                    <HamMenu></HamMenu>
                </div>

                <div className="flex flex-1 items-center gap-5">
                    {/* 🔹 Logo */}
                    <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                        <img src={logo} alt="KnowSphere Logo" className='w-12' />
                    </Link>

                    <div className='hidden md:flex'>
                        <NavLinks></NavLinks>
                    </div>
                </div>

            </div>

            {/* 🔹 RIGHT */}
            <div className="navbar-end flex-1 gap-2 sm:gap-3 md:gap-4">

                {/* login with name and password */}
                <div className='flex flex-row items-center gap-2'>
                    {
                        user ? (
                            <Profile></Profile>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="btn btn-dash btn-primary "
                                >
                                    Login
                                </Link>

                            </>
                        )}
                </div>


                {/* 👤 Profile */}

            </div>
        </div>

    );
};

export default Navbar;