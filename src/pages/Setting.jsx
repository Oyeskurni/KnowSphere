import { useState } from "react";
import { motion } from "framer-motion";
import {
    Settings, Mail, MapPin, Calendar,
    Edit3, Grid, Heart, BookMarked, MessageCircle
} from "lucide-react";

const Setting = () => {
    const [activeTab, setActiveTab] = useState("posts");

    // Mock User Data
    const user = {
        name: "Afra Anjum",
        username: "@afra_dev",
        bio: "Full-stack Developer | UI/UX Enthusiast | Writing about the future of AI and Web Tech.",
        location: "Dhaka, Bangladesh",
        joined: "January 2024",
        stats: { posts: 12, followers: "1.2k", following: 450 },
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Afra"
    };

    return (
        <div className="min-h-screen bg-base-200/50 pb-12">
            {/* 1. Profile Header/Cover Banner */}
            <div className="h-48 md:h-64 bg-gradient-to-r from-primary to-secondary w-full"></div>

            <div className="max-w-6xl mx-auto px-4 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* 2. Left Column: Sidebar Profile Info */}
                    <aside className="lg:col-span-4 space-y-6">
                        <div className="card bg-base-100 shadow-xl border border-base-200 p-6 text-center lg:text-left">
                            <div className="avatar -mt-20 mb-4 justify-center lg:justify-start">
                                <div className="w-32 h-32 rounded-2xl ring ring-base-100 ring-offset-4 shadow-2xl bg-white">
                                    <img src={user.avatar} alt={user.name} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl font-black">{user.name}</h1>
                                <p className="text-primary font-medium">{user.username}</p>
                            </div>

                            <p className="mt-4 text-base-content/70 leading-relaxed text-sm">
                                {user.bio}
                            </p>

                            <div className="divider opacity-50"></div>

                            <div className="space-y-3 text-sm text-base-content/60">
                                <div className="flex items-center gap-3">
                                    <MapPin size={18} /> <span>{user.location}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar size={18} /> <span>Joined {user.joined}</span>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-block mt-6 gap-2">
                                <Edit3 size={18} /> Edit Profile
                            </button>
                        </div>

                        {/* Quick Stats Widget */}
                        <div className="card bg-base-100 shadow-lg p-6 flex flex-row justify-around">
                            <div className="text-center">
                                <p className="text-xl font-bold">{user.stats.posts}</p>
                                <p className="text-xs uppercase opacity-50">Posts</p>
                            </div>
                            <div className="text-center border-x px-6 border-base-300">
                                <p className="text-xl font-bold">{user.stats.followers}</p>
                                <p className="text-xs uppercase opacity-50">Followers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-bold">{user.stats.following}</p>
                                <p className="text-xs uppercase opacity-50">Following</p>
                            </div>
                        </div>
                    </aside>

                    {/* 3. Right Column: Content & Activity */}
                    <main className="lg:col-span-8 space-y-6">
                        {/* Tabs Navigation */}
                        <div className="tabs tabs-boxed bg-base-100 p-2 shadow-sm">
                            <button
                                onClick={() => setActiveTab("posts")}
                                className={`tab flex-1 gap-2 font-bold ${activeTab === 'posts' ? 'tab-active' : ''}`}
                            >
                                <Grid size={18} /> My Posts
                            </button>
                            <button
                                onClick={() => setActiveTab("saved")}
                                className={`tab flex-1 gap-2 font-bold ${activeTab === 'saved' ? 'tab-active' : ''}`}
                            >
                                <BookMarked size={18} /> Bookmarks
                            </button>
                            <button
                                onClick={() => setActiveTab("comments")}
                                className={`tab flex-1 gap-2 font-bold ${activeTab === 'comments' ? 'tab-active' : ''}`}
                            >
                                <MessageCircle size={18} /> Activity
                            </button>
                        </div>

                        {/* Dynamic Content Area */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            {activeTab === "posts" && (
                                <>
                                    {/* Small Horizontal Post Preview */}
                                    {[1, 2, 3].map((post) => (
                                        <div key={post} className="card card-side bg-base-100 shadow-sm hover:shadow-md transition-all border border-base-200">
                                            <div className="card-body p-5">
                                                <div className="flex justify-between">
                                                    <h2 className="card-title text-lg hover:text-primary cursor-pointer">Sample Article Title {post}</h2>
                                                    <div className="flex items-center gap-4 text-xs opacity-50">
                                                        <span className="flex items-center gap-1"><Heart size={14} /> 45</span>
                                                        <span className="flex items-center gap-1"><MessageCircle size={14} /> 12</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm opacity-60">Dec 20, 2025 • 5 min read</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                            {activeTab === "saved" && (
                                <div className="text-center py-20 bg-base-100 rounded-3xl border-2 border-dashed border-base-300">
                                    <BookMarked size={48} className="mx-auto opacity-20" />
                                    <p className="mt-2 opacity-50">Saved articles will appear here.</p>
                                </div>
                            )}
                        </motion.div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Setting;