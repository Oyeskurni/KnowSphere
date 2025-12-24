import React from 'react';
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import NavLinks from './NavLinks';
import CategoryTabs from './CategoryTabs ';

const HamMenu = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

            {/* Button */}
            <div className="drawer-content">
                <label
                    htmlFor="my-drawer-1"
                    className="text-xl btn btn-ghost btn-circle drawer-button cursor-pointer"
                >
                    <MdOutlineMenuOpen />
                </label>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-1"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <div className="menu bg-base-200 min-h-full w-80 p-4 relative">

                    {/* ❌ Close Button */}
                    <label
                        htmlFor="my-drawer-1"
                        className="absolute top-3 right-3 btn btn-ghost btn-sm btn-circle"
                    >
                        <MdClose className="text-xl" />
                    </label>

                    <div className="pt-10 pb-4 border-b border-base-300 overflow-y-auto">
                        <NavLinks />
                    </div>

                    <div className="pt-4 pb-6">
                        <CategoryTabs />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HamMenu;
