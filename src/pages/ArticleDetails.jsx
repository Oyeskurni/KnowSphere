import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { Heart, MessageSquare, User, Calendar, Tag } from "lucide-react"; // Using Lucide for modern icons

const ArticleDetails = () => {
    const { id } = useParams();
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState("");

    // Mock data - replace with your actual database fetch logic
    const article = {
        title: "The Future of Web Development in 2025",
        content: "Full article content goes here... HTML or Markdown format recommended.",
        category: "Technology",
        tags: ["React", "JavaScript", "WebDev"],
        author: {
            name: "John Doe",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        },
        publishedDate: "Dec 24, 2025",
    };

    const handleLike = async () => {
        // API call to update like in database
        setLikes(prev => prev + 1);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // API call to store comment in database
        console.log("Comment submitted:", comment);
        setComment("");
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Main Article Card */}
                <article className="card bg-base-100 shadow-xl overflow-hidden">

                    {/* Header Section */}
                    <div className="card-body p-6 md:p-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="avatar">
                                <div className="w-12 rounded-full border-2 border-primary">
                                    <img src={article.author.photo} alt={article.author.name} />
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-lg">{article.author.name}</p>
                                <div className="flex items-center text-xs text-base-content/60 gap-2">
                                    <Calendar size={14} /> <span>{article.publishedDate}</span>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-base-content">
                            {article.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {article.tags.map(tag => (
                                <div key={tag} className="badge badge-outline badge-lg text-sm italic">
                                    #{tag}
                                </div>
                            ))}
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none text-base-content/80 leading-relaxed">
                            {article.content}
                        </div>

                        <div className="divider my-10"></div>

                        {/* Interaction Section (Likes & Comments Count) */}
                        <div className="flex items-center gap-6 mb-8">
                            <button
                                onClick={handleLike}
                                className="flex items-center gap-2 group transition-colors hover:text-error"
                            >
                                <div className="p-3 bg-base-200 rounded-full group-hover:bg-error/10 transition-colors">
                                    <Heart className={likes > 0 ? "fill-error text-error" : ""} size={24} />
                                </div>
                                <span className="font-bold text-lg">{likes} Likes</span>
                            </button>

                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-base-200 rounded-full">
                                    <MessageSquare size={24} />
                                </div>
                                <span className="font-bold text-lg">12 Comments</span>
                            </div>
                        </div>

                        {/* Post a Comment */}
                        <section>
                            <h3 className="text-xl font-bold mb-4">Discussion</h3>
                            <form onSubmit={handleCommentSubmit} className="space-y-4">
                                <textarea
                                    className="textarea textarea-bordered w-full h-32 text-base focus:border-primary"
                                    placeholder="Add to the discussion..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                ></textarea>
                                <button type="submit" className="btn btn-primary px-8">Submit Comment</button>
                            </form>

                            {/* Comments List (Optional Display) */}
                            <div className="mt-10 space-y-6">
                                {/* Example of a single comment */}
                                <div className="flex gap-4">
                                    <div className="avatar h-10 w-10">
                                        <div className="rounded-full">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="User" />
                                        </div>
                                    </div>
                                    <div className="bg-base-200 p-4 rounded-xl flex-1 border border-base-300">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold">Jane Smith</span>
                                            <span className="text-xs text-base-content/50">2 hours ago</span>
                                        </div>
                                        <p className="text-base-content/80">Great insights! I really enjoyed the section on React v19.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </article>
            </div>
        </div>
    );
};

export default ArticleDetails;