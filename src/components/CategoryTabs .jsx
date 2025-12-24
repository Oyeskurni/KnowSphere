import React from 'react';
import { Link } from 'react-router';
import { GoGoal } from "react-icons/go";
import { FiTrendingUp } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { FaAtom } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
const CategoryTabs = () => {

    const categories = [{
        name: 'Relevant',
        path: '/category/relevant',
        logo: <GoGoal />
    }, {
        name: 'Latest',
        path: '/category/latest',
        logo: <FiTrendingUp />
    },
    {
        name: 'Top',
        path: '/category/top',
        logo: <FaCrown />
    },
    {
        name: 'Technology',
        path: '/category/technology',
        logo: <FiCpu />
    },
    {
        name: 'Science',
        path: '/category/science',
        logo: <FaAtom />
    },
    {
        name: 'Arts',
        path: '/category/arts',
        logo: <FaPalette />
    },
    {
        name: 'Politics',
        path: '/category/politics',
        logo: <FaFlagUsa />
    }, {
        name: 'Business',
        path: '/category/business',
        logo: <FaBriefcase />
    },
    ];
    return (
        <div className='flex flex-col gap-2'>
            {
                categories.map((category, index) => {
                    return (
                        <Link key={index} to={category.path} className='text-base-400 text-primary font-medium hover:bg-base-300 hover:rounded ps-2'>
                            <div className='flex flex-row items-center p-2 gap-3'>
                                <span>{category.logo}</span>
                                <span>{category.name}</span>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default CategoryTabs;