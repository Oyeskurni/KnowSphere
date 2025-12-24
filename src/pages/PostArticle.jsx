import React from 'react';

const PostArticle = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Create New Article</h1>

            <form className="space-y-5">

                {/* Title */}
                <div>
                    <label className="label">Article Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter article title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="label">Category</label>
                    <select
                        name="category"
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Technology">Technology</option>
                        <option value="Programming">Programming</option>
                        <option value="AI">AI</option>
                        <option value="Business">Business</option>
                    </select>
                </div>

                {/* Content */}
                <div>
                    <label className="label">Article Content</label>
                    <textarea
                        name="content"
                        rows="8"
                        placeholder="Write your article here..."
                        className="textarea textarea-bordered w-full"
                        required
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="label">Tags</label>
                    <input
                        type="text"
                        placeholder="AI, Future, Innovation"
                        className="input input-bordered w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Separate tags with commas
                    </p>
                </div>

                {/* Author Preview */}
                <div className="flex items-center gap-4 border border-base-300 p-4 rounded-lg">
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcT0QGetG2uzAvnYBjODTUeGzqZjpcfsUUQ&s'
                        alt="author"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">oyes kuruni islam</p>
                        <p className="text-sm text-gray-500">oyeskuruniislam@gmail.com</p>
                    </div>
                </div>

                {/* Submit */}
                <button className="btn btn-primary w-full">
                    Publish Article
                </button>
            </form>
        </div>
    );
};

export default PostArticle;