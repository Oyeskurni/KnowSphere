import { useState } from "react";
import { Link } from "react-router";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MessageSquare, Heart, ThumbsUp, ThumbsDown, Share2, ArrowRight } from "lucide-react";
import useAuth from "../hooks/useAuth";
import LikeUnlike from "./LikeUnlike";

const ArticleCard = ({ article }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { comments } = useAuth();

    if (!article) return null;

    const {
        _id,
        title,
        author_name,
        author_photo,
        tags,
        date,
        likes,
        likesCount,
    } = article;

    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm hover:border-primary/30 transition-all duration-200">
            <div className="card-body p-5 gap-4">

                {/* Author Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={author_photo} alt="User Avatar" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-sm hover:underline cursor-pointer">{author_name}</p>
                            <p className="text-xs text-base-content/60"> {date || "Unknown Date"}</p>
                        </div>
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`btn btn-ghost btn-circle btn-sm ${isBookmarked ? 'text-primary' : 'text-base-content/40'}`}
                    >
                        {isBookmarked ? <FaBookmark size={18} /> : <FaRegBookmark size={18} />}
                    </button>
                </div>

                {/* Content Section */}
                <div className="space-y-2">
                    <Link to={`/article`}>
                        <h2 className="card-title text-xl font-extrabold hover:text-primary transition-colors cursor-pointer leading-tight">
                            {title}
                        </h2>
                    </Link>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        {tags?.map((tag, index) => (
                            <span key={index} className="badge badge-outline badge-sm italic">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions & Metrics */}
                <div className="flex justify-between items-center pt-4 border-t border-base-200">
                    <div className="flex items-center gap-4 text-sm text-base-content/70">
                        {/* <div
                            onClick={handleLike}
                            className="flex items-center gap-1.5 hover:bg-base-200 px-2 py-1 rounded-lg cursor-pointer transition-colors"
                        >
                            <Heart
                                size={16}
                                className={liked ? "fill-error text-error" : "text-base-content/60"}
                            />
                            <span>{likeCount}</span>
                        </div> */}
                        <LikeUnlike articleId={_id} likes={likes} likesCount={likesCount}></LikeUnlike>

                        <Link to={`/article/${_id}`}>
                            <div className="flex items-center gap-1.5 hover:bg-base-200 px-2 py-1 rounded-lg cursor-pointer transition-colors">
                                <MessageSquare size={16} />
                                <span>
                                    {comments?.length || 0} <span className="hidden sm:inline">comments</span>
                                </span>
                            </div>
                        </Link>

                    </div>

                    <Link to={`/article/${_id}`} className="btn btn-ghost btn-sm group-hover:gap-3 transition-all text-primary border-none bg-primary/5 hover:bg-primary hover:text-white">
                        Read More
                        <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ArticleCard;