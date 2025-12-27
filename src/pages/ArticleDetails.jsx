import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, MessageSquare, User, Calendar, Tag, Clock } from "lucide-react"; // Using Lucide for modern icons
import { useLoaderData } from "react-router";

const ArticleDetails = () => {
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState("");

    const { title, content, author_name, author_photo, tags, thumbnail, date } = useLoaderData();

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
                <article className="card bg-base-100 shadow-2xl overflow-hidden border border-base-300">

                    {/* Thumbnail / Hero Image */}
                    {
                        thumbnail &&
                        <figure className="relative w-full h-96 overflow-hidden">
                            <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
                        </figure>
                    }

                    {/* Header Section */}
                    <div className="card-body p-6 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={author_photo} alt='author' />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-black text-xl">{author_name}</p>
                                    <div className="flex items-center text-sm text-base-content/60 gap-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} /> <span>{date}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} /> <span>8 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-base-content tracking-tight">
                            {title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {tags.map(tag => (
                                <div key={tag} className="badge badge-secondary badge-outline hover:bg-secondary hover:text-secondary-content cursor-pointer transition-all">
                                    #{tag}
                                </div>
                            ))}
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none text-base-content/90 leading-relaxed font-serif">
                            {content}
                        </div>

                        <div className="divider my-12"></div>

                        {/* Interaction Section */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-10">
                            <button
                                onClick={handleLike}
                                className="btn btn-ghost hover:bg-error/10 group rounded-full px-6 border border-base-300"
                            >
                                <Heart className={likes > 0 ? "fill-error text-error" : "group-hover:text-error"} size={22} />
                                <span className="font-bold text-lg">{likes}</span>
                            </button>

                            <div className="btn btn-ghost no-animation cursor-default rounded-full px-6 border border-base-300">
                                <MessageSquare size={22} className="text-primary" />
                                <span className="font-bold text-lg">12 <span className="hidden sm:inline">Comments</span></span>
                            </div>
                        </div>

                        {/* Post a Comment */}
                        <section className="bg-base-200/50 p-6 md:p-8 rounded-2xl">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                Discussion
                                <div className="badge badge-primary">{12}</div>
                            </h3>
                            <form onSubmit={handleCommentSubmit} className="space-y-4">
                                <textarea
                                    className="textarea textarea-bordered w-full h-32 text-lg focus:ring-2 focus:ring-primary/20 border-base-300"
                                    placeholder="Share your thoughts..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                ></textarea>
                                <div className="flex justify-end">
                                    <button type="submit" className="btn btn-primary btn-md md:btn-lg shadow-lg">
                                        Post Comment
                                    </button>
                                </div>
                            </form>

                            {/* Comments List */}
                            <div className="mt-12 space-y-8">
                                <div className="flex gap-4">
                                    <div className="avatar h-12 w-12 shrink-0">
                                        <div className="rounded-full ring-1 ring-base-300">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="User" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="font-bold text-base">Jane Smith</span>
                                                <span className="text-xs opacity-50">2 hours ago</span>
                                            </div>
                                            <p className="text-base-content/80">Great insights! I really enjoyed the section on React v19. The new features look very promising.</p>
                                        </div>
                                        <div className="flex gap-4 mt-2 ml-2">
                                            <button className="text-xs font-bold hover:underline opacity-60">Like</button>
                                            <button className="text-xs font-bold hover:underline opacity-60">Reply</button>
                                        </div>
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