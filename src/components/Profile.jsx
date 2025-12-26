import React, { use } from 'react';
import { CiSettings } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from 'react-router';
import { IoIosLogOut } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import useAuth from '../hooks/useAuth';

const Profile = () => {
    const { user, logOut } = useAuth();
    const menuLinks = [
        {
            name: 'Settings',
            icon: <CiSettings />,
            path: '/profile'
        },

        {
            name: 'Bookmark',
            icon: <FaBookmark />,
            path: '/bookmark',
        },
        {
            name: 'My Article',
            icon: < MdArticle />,
            path: '/my-articles',
        }
    ];

    const handleLogout = () => {
        if (!confirm("Are you sure you want to logout?")) return;
        logOut()
            .then(() => {
                console.log('log out successfully');

            })
            .catch(err => console.log(err));
    }
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 sm:w-9 md:w-10 rounded-full">
                    <img src={user?.photoURL || 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80'} />
                </div>
            </label>

            <ul
                tabIndex={0}
                className=" mt-3 dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 pb-5"
            >

                {/* User Info */}
                <li className="border-b border-base-300 pb-4 mb-4">
                    <div className="flex flex-col justify-center items-center gap-1">
                        <span className="text-xs text-gray-500">{user?.email}</span>
                        <span className="font-semibold">{user?.displayName}</span>
                    </div>
                </li>

                {/* Menu Links */}
                {
                    menuLinks.map((link, index) => (
                        <li key={index} className=" flex  items-center gap-2 hover:bg-base-200 p-2 pl-2 rounded-md hover:cursor-pointer hover:text-primary">
                            <div>
                                {link.icon}
                            </div>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))
                }

                {/* Mobile Only */}
                <li className="flex  items-center gap-2 hover:bg-base-200 p-2 pl-2 rounded-md hover:cursor-pointer hover:text-primary  ">
                    <div>
                        <IoCreateOutline className='text-xl' />
                    </div>
                    <Link to="/post-article">Post Article</Link>
                </li>

                <li className='border-b border-base-300 pb-4 mb-4'></li>
                <li
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:bg-base-200 p-2 rounded-md cursor-pointer text-error hover:text-error"
                >
                    <IoIosLogOut className="text-lg" />
                    <span>Logout</span>
                </li>

            </ul>


        </div>
    );
};

export default Profile;