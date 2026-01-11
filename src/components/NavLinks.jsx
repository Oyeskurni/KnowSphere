import React from 'react';
import { Link, NavLink } from 'react-router';

const NavLinks = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Articles', path: '/all-articles' },
        { name: 'My Articles', path: '/my-articles' },
        { name: 'Post Article', path: '/post-article' },
        { name: 'About Us', path: '/about' },
    ];
    return (
        <div>

            <ul className="flex flex-col md:flex-row gap-4">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path} className="text-md font-semibold text-gray-500 hover:text-primary hover:underline">
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavLinks;