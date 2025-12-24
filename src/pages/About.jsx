import React from 'react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            {/* 🔹 Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl md:text-4xl font-bold">
                    About <span className="text-primary">KnowSphere</span>
                </h1>
                <p className="mt-4 text-gray-500 text-sm md:text-base">
                    A student-focused knowledge sharing platform built to inspire learning,
                    collaboration, and meaningful discussions.
                </p>
            </div>

            {/* 🔹 Mission + Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold">🎯 Our Mission</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Our mission is to empower students to share knowledge, explore new ideas,
                            and grow together through meaningful articles and discussions.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold">🚀 Our Vision</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            We envision a community where learning never stops and students from
                            different backgrounds can connect through knowledge and creativity.
                        </p>
                    </div>
                </div>

            </div>

            {/* 🔹 What We Offer */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-center mb-8">
                    What We Offer
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="card bg-base-100 border">
                        <div className="card-body">
                            <h3 className="font-semibold">✍️ Knowledge Sharing</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Students can publish articles, share insights, and express ideas
                                freely in a supportive environment.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 border">
                        <div className="card-body">
                            <h3 className="font-semibold">💬 Community Discussion</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Engage with others through comments, feedback, and thoughtful
                                conversations.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 border">
                        <div className="card-body">
                            <h3 className="font-semibold">📚 Organized Content</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Discover articles by categories and tags to easily find what
                                matters most to you.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 🔹 Call To Action */}
            <div className="bg-base-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold">
                    Join the Knowledge Movement
                </h2>
                <p className="text-sm text-gray-600 mt-3 max-w-2xl mx-auto">
                    Whether you're a student, learner, or creator — KnowSphere welcomes
                    you to be part of a growing knowledge-driven community.
                </p>
                <button className="btn btn-primary mt-6">
                    Start Exploring
                </button>
            </div>

        </div>
    );
};

export default About;