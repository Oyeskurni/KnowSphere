import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';



const TopContributors = () => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        fetch('https://knowledge-server-wkhc.onrender.com/top-contributors')
            .then(res => res.json())
            .then(data => setContributors(data));
    }, []);

    return (
        <div className="flex flex-col gap-8">

            {/* 🏆 Top Contributors */}
            <div
                data-aos="fade-up"
                className="relative rounded-2xl bg-base-200 border border-base-300 shadow-md overflow-hidden"
            >
                {/* subtle glow */}
                <div className="absolute -top-10 -right-10 h-32 w-32 bg-indigo-500/20 blur-3xl rounded-full"></div>

                <div className="relative p-6">
                    <h3 className="font-extrabold text-lg flex items-center gap-2">
                        <span className="text-indigo-500">🏆</span> Top Contributors
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm">
                        {contributors.map((user, index) => (
                            <li
                                key={index}
                                className="group flex items-center gap-3 p-2 rounded-xl transition-all hover:bg-base-300"
                            >
                                {/* avatar + rank */}
                                <div className="relative">
                                    <img
                                        src={user._id.photo}
                                        className="w-9 h-9 rounded-full border border-base-300"
                                        alt=""
                                    />
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 text-[10px] font-bold flex items-center justify-center rounded-full bg-indigo-500 text-white">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* info */}
                                <div>
                                    <p className="font-semibold group-hover:text-indigo-500 transition">
                                        {user._id.name}
                                    </p>
                                    <p className="text-xs opacity-70">
                                        📝 {user.totalArticles} · ❤️ {user.totalLikes} · 💬 {user.totalComments}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ✨ Shimmer CTA Card */}
            <div className="relative group">
                {/* shimmer border */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-sm animate-[shimmer_2.5s_linear_infinite]" />

                <div className="relative rounded-2xl bg-base-100 p-6 shadow-xl transition-all duration-300 group-hover:scale-[1.03]">
                    <h3 className="text-xl font-extrabold">
                        Join <span className="text-indigo-500">KnowSphere</span> Today 🚀
                    </h3>

                    <p className="mt-2 text-sm opacity-70">
                        Start sharing your knowledge and connect with amazing people.
                    </p>

                    <Link
                        to="/signup"
                        className="mt-4 inline-flex items-center justify-center px-5 py-2 text-sm font-semibold bg-indigo-500 text-white rounded-lg shadow-[3px_3px_0px_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default TopContributors;
