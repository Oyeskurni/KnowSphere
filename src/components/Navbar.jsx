import React from 'react';
import { Link } from 'react-router';
import NavLinks from './NavLinks';
import logo from '../assets/sharing-idea.jpg';
import HamMenu from './HamMenu';

const Navbar = () => {
    const menuLinks = [
        { name: 'Profile', path: '/' },
        {
            name: 'Bookmark',
            path: '/bookmarks/:id',
        }
    ];
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

                {/* ➕ Create Post (Desktop) */}
                <Link
                    to="/post-article"
                    className="btn btn-dash btn-primary hidden md:flex"
                >
                    <div className='flex flex-row items-center gap-2'>
                        <span> Logout</span>
                    </div>
                </Link>


                {/* 👤 Profile */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 sm:w-9 md:w-10 rounded-full">
                            <img src="https://i.pravatar.cc/150?img=12" alt="profile" />
                        </div>
                    </label>

                    <ul
                        tabIndex={0}
                        className=" mt-3 dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 pb-5"
                    >

                        {/* User Info */}
                        <li className="border-b border-base-300 pb-4 mb-4">
                            <div className="flex flex-col justify-center items-center gap-1">
                                <span className="text-xs text-gray-500">oyes@gmail.com</span>
                                <span className="font-semibold">Oyes Islam</span>
                            </div>
                        </li>

                        {/* Menu Links */}
                        {
                            menuLinks.map((link, index) => (
                                <li key={index} className="hover:bg-base-200 p-2 pl-2 rounded-md hover:cursor-pointer hover:text-primary">
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                            ))
                        }

                        {/* Mobile Only */}
                        <li className="md:hidden">
                            <Link to="/post-article">Create Post</Link>
                        </li>


                    </ul>


                </div>
            </div>
        </div>

    );
};

export default Navbar;