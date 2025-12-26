import { useNavigate } from "react-router"; // React Router v7
import { motion } from "framer-motion";
import { ImagePlus, Send, Tag, LayoutGrid, Type } from "lucide-react";
import useAuth from "../hooks/useAuth";
import TagInput from './../components/TagInput';
import { useState } from "react";

const PostArticle = () => {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);

    const { user } = useAuth();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const articleForm = Object.fromEntries(formData.entries());
        const articleData = { ...articleForm, tags };
        console.log(articleData);

    }



    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto bg-base-100 rounded-2xl shadow-xl p-8"
            >
                <div className="mb-8 border-b pb-4">
                    <h1 className="text-3xl font-black text-base-content">Create New Article</h1>
                    <p className="text-base-content/60">Share your thoughts with the community.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">

                    {/* Title Field */}
                    <div className="form-control">
                        <label className="label font-bold text-sm uppercase tracking-wide">
                            <span className="flex items-center gap-2"><Type size={16} /> Article Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g. Mastering React Router v7"
                            className={`input input-bordered w-full focus:input-primary `}

                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category Dropdown */}
                        <div className="form-control">
                            <label className="label font-bold text-sm uppercase">
                                <span className="flex items-center gap-2"><LayoutGrid size={16} /> Category</span>
                            </label>
                            <select
                                name="category"
                                className="select select-bordered w-full focus:select-primary"

                            >
                                <option value="">Select Category</option>
                                <option value="tech">Technology</option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="business">Business</option>
                                <option value="education">Education</option>
                            </select>
                        </div>

                        {/* Date Field */}
                        <div className="form-control">
                            <label className="label font-bold text-sm uppercase">
                                <span className="flex items-center gap-2">Date</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered w-full focus:input-primary"

                            />
                        </div>
                    </div>

                    {/* Thumbnail URL */}
                    <div className="form-control">
                        <label className="label font-bold text-sm uppercase">
                            <span className="flex items-center gap-2"><ImagePlus size={16} /> Thumbnail URL</span>
                        </label>
                        <input
                            type="url"
                            name="thumbnail"
                            placeholder="https://images.unsplash.com/your-image-url"
                            className="input input-bordered w-full focus:input-primary"

                        />
                    </div>

                    {/* Tags */}
                    <TagInput tags={tags} setTags={setTags}></TagInput>

                    {/* Content Textarea */}
                    <div className="form-control flex flex-col">
                        <label className="label font-bold text-sm uppercase">
                            <span>Article Content</span>
                        </label>
                        <textarea
                            name="content"
                            className="textarea textarea-bordered h-64 text-base focus:textarea-primary w-full"
                            placeholder="Write your story here..."

                        ></textarea>
                    </div>

                    {/* Read-only User Info */}
                    <div className="bg-base-200 p-4 rounded-lg flex items-center justify-between text-sm opacity-80">
                        <div className="flex flex-col">
                            <span className="font-bold"> {user.displayName}</span>
                            <span>Email: {user.email}</span>
                        </div>
                        {
                            user ? (<span className="badge badge-success badge-outline">Logged In</span>) : (<span className="badge badge-error badge-outline">Not Logged In</span>)
                        }
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary btn-block gap-2 shadow-lg">
                        <Send size={18} /> Publish Article
                    </button>
                </form>
            </motion.div>


        </div>
    );
};

export default PostArticle;