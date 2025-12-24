import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
const ContentLayout = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    return (
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex flex-col gap-6 mb-5">
                {/* 📰 Article Feed */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="card bg-white">
                        <div className="card-body gap-3">

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-sm">Afra Anjum</p>
                                    <p className="text-xs text-gray-500">Jun 12</p>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="card-title text-lg hover:text-primary cursor-pointer">
                                The Future of AI in Student Life
                            </h2>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="badge badge-outline">#AI</span>
                                <span className="badge badge-outline">#Education</span>
                                <span className="badge badge-outline">#Future</span>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-between items-center pt-2 text-sm text-gray-500">
                                <div className="flex gap-4">
                                    <span>❤️ 24</span>
                                    <span>👍 12</span>
                                    <span>👎 2</span>
                                    <span>💬 6 comments</span>
                                    <span className='flex justify-center items-center text-gray-700 '>
                                        {isBookmarked ? (
                                            <button
                                                className="flex items-center gap-1"
                                                onClick={() => setIsBookmarked(false)}
                                            >
                                                <FaRegBookmark />
                                            </button>
                                        ) : (
                                            <button
                                                className="flex items-center gap-1"
                                                onClick={() => setIsBookmarked(true)}
                                            >
                                                <FaBookmark />
                                            </button>
                                        )}
                                    </span>
                                </div>
                                <button className="btn btn-ghost btn-sm">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 mb-5">
                {/* 📰 Article Feed */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="card bg-white">
                        <div className="card-body gap-3">

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-sm">Afra Anjum</p>
                                    <p className="text-xs text-gray-500">Jun 12</p>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="card-title text-lg hover:text-primary cursor-pointer">
                                The Future of AI in Student Life
                            </h2>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="badge badge-outline">#AI</span>
                                <span className="badge badge-outline">#Education</span>
                                <span className="badge badge-outline">#Future</span>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-between items-center pt-2 text-sm text-gray-500">
                                <div className="flex gap-4">
                                    <span>❤️ 24</span>
                                    <span>👍 12</span>
                                    <span>👎 2</span>
                                    <span>💬 6 comments</span>
                                    <span className='flex justify-center items-center text-gray-700 '>
                                        {isBookmarked ? (
                                            <button
                                                className="flex items-center gap-1"
                                                onClick={() => setIsBookmarked(false)}
                                            >
                                                <FaRegBookmark />
                                            </button>
                                        ) : (
                                            <button
                                                className="flex items-center gap-1"
                                                onClick={() => setIsBookmarked(true)}
                                            >
                                                <FaBookmark />
                                            </button>
                                        )}
                                    </span>
                                </div>
                                <button className="btn btn-ghost btn-sm">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 mb-5">
                {/* 📰 Article Feed */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="card bg-white">
                        <div className="card-body gap-3">

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-sm">Afra Anjum</p>
                                    <p className="text-xs text-gray-500">Jun 12</p>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="card-title text-lg hover:text-primary cursor-pointer">
                                The Future of AI in Student Life
                            </h2>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="badge badge-outline">#AI</span>
                                <span className="badge badge-outline">#Education</span>
                                <span className="badge badge-outline">#Future</span>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-between items-center pt-2 text-sm text-gray-500">
                                <div className="flex gap-4">
                                    <span>❤️ 24</span>
                                    <span>👍 12</span>
                                    <span>👎 2</span>
                                    <span>💬 6 comments</span>
                                    <span className='flex justify-center items-center text-gray-700 '>
                                        {isBookmarked ? (
                                            <button
                                                className="flex items-center gap-1"
                                                onClick={() => setIsBookmarked(false)}
                                            >
                                                <FaRegBookmark />
                                            </button>
                                        ) : (
                                            <button
                                                className="flex items-center gap-1"
                                                onClick={() => setIsBookmarked(true)}
                                            >
                                                <FaBookmark />
                                            </button>
                                        )}
                                    </span>
                                </div>
                                <button className="btn btn-ghost btn-sm">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContentLayout;