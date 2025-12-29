import { useLoaderData, useNavigate } from "react-router"; // React Router v7
import { motion } from "framer-motion";
import { ImagePlus, Send, Tag, LayoutGrid, Type, Clock } from "lucide-react";
import useAuth from "../hooks/useAuth";
import TagInput from './../components/TagInput';
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";



const UpdateArticle = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [tagss, setTagss] = useState([]);
    const { user } = useAuth();
    const articles = useLoaderData();

    const { title, category, date, thumbnail, tags, content, readTime } = articles;

    useEffect(() => {
        setTagss(tags);
    }, [tags])



    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const articleForm = Object.fromEntries(formData.entries());
        // formatDate
        const formattedDate = formatDate(articleForm.date);
        // Validate readTime05
        if (!validateReadTime(articleForm.readTime)) {
            setError("Read time must be a positive number");
            return;
        }

        const articleData = { ...articleForm, date: formattedDate, tags: tagss };


        axios.patch(`http://localhost:5000/articles/${articles._id}`, articleData)
            .then(() =>
                navigate('/my-articles')
            )
            .catch(err => {
                if (err.response?.status === 401) {
                    Swal.fire("Login required", "Please login first", "warning");
                }
                else if (err.response?.status === 403) {
                    Swal.fire("Forbidden", "You are not allowed to update this article", "error");
                }
                else {
                    Swal.fire("Error", "Something went wrong. Try again.", "error");
                }
            });

    }
    const formatDate = (date) => {
        if (!date) return 'unknown date';
        return new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const validateReadTime = (value) => {
        if (!value) return false;
        if (!/^\d+$/.test(value)) return false;
        if (Number(value) <= 0) return false;
        return true;
    };

    const formatDateForInput = (dateString) => {
        if (!dateString) return "";
        const d = new Date(dateString);
        return d.toISOString().split("T")[0]; // YYYY-MM-DD
    };




    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto bg-base-100 rounded-2xl shadow-xl p-8"
            >
                <div className="mb-8 border-b pb-4">
                    <h1 className="text-3xl font-black text-base-content">Update Article</h1>
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
                            defaultValue={title}
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
                                defaultValue={category}
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
                                defaultValue={formatDateForInput(date)}
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
                            defaultValue={thumbnail}
                            placeholder="https://images.unsplash.com/your-image-url"
                            className="input input-bordered w-full focus:input-primary"

                        />
                    </div>

                    {/* Tags */}
                    <TagInput tags={tagss} setTags={setTagss} ></TagInput>

                    {/* Content Textarea */}
                    <div className="form-control flex flex-col">
                        <label className="label font-bold text-sm uppercase">
                            <span>Article Content</span>
                        </label>
                        <textarea
                            name="content"
                            defaultValue={content}
                            className="textarea textarea-bordered h-64 text-base focus:textarea-primary w-full"
                            placeholder="Write your story here..."

                        ></textarea>
                    </div>

                    {/* Read Time Field */}
                    <div className="form-control">
                        <label className="label font-bold text-sm uppercase tracking-wide">

                            <span className="flex items-center gap-2"><Clock size={16} /> Read Time</span>
                        </label>
                        <input
                            type="text"
                            name="readTime"
                            defaultValue={readTime}
                            placeholder="Read Time (in minutes)"
                            className={`input input-bordered w-full ${error ? "input-error" : ""
                                }`}
                            onChange={(e) => setError(validateReadTime(e.target.value))}
                        />
                        {error && (
                            <label className="label">
                                <span className="label-text-alt text-error">
                                    {error}
                                </span>
                            </label>
                        )}
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

export default UpdateArticle;