import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Search, Trash2, Clock, ExternalLink, Inbox } from "lucide-react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const BookmarkPage = () => {
    const { user } = useAuth();

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // 🔹 Fetch bookmarked articles
    useEffect(() => {
        if (user?.email) {
            axios
                .get(`https://knowledge-server-1.onrender.com/my-bookmarks?user_email=${user.email}`)
                .then(res => {
                    setArticles(res.data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user]);

    // 🔹 Remove bookmark (DB + UI sync)
    const removeBookmark = async (articleId) => {
        axios.delete(
            `https://knowledge-server-1.onrender.com/my-bookmarks/${articleId}`,
            { params: { user_email: user.email } }
        )


        setArticles(prev =>
            prev.filter(article => article._id !== articleId)
        );
    };

    // 🔹 Search filter
    const filteredBookmarks = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;

    if (articles.length === 0) {
        return <p className="text-center mt-10">No saved articles 📭</p>;
    }

    return (
        <div className="min-h-screen bg-base-200/50 py-10 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-black flex items-center gap-3">
                            <Bookmark className="text-primary" size={36} fill="currentColor" />
                            Reading List
                        </h1>
                        <p className="text-base-content/60 mt-2">
                            You have {articles.length} articles saved for later.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                        <input
                            type="text"
                            placeholder="Search your bookmarks..."
                            className="input input-bordered w-full pl-10 focus:input-primary bg-base-100"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </header>

                {/* Bookmark List */}
                <div className="grid gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredBookmarks.length > 0 ? (
                            filteredBookmarks.map(item => (
                                <motion.div
                                    key={item._id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="group card card-side bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all overflow-hidden"
                                >
                                    {/* Thumbnail */}
                                    <figure className="hidden sm:block w-48 shrink-0">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </figure>

                                    <div className="card-body p-5 flex-row justify-between items-center">
                                        <div className="space-y-2 max-w-[70%]">
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                                                <span>{item.category}</span>
                                                <span className="text-base-content/20">•</span>
                                                <span className="flex items-center gap-1 text-base-content/50 uppercase">
                                                    <Clock size={12} /> {item.date}
                                                </span>
                                            </div>

                                            <Link to={`/article/${item._id}`}>
                                                <h2 className="card-title text-lg md:text-xl group-hover:text-primary transition-colors line-clamp-1">
                                                    {item.title}
                                                </h2>
                                            </Link>

                                            <p className="text-sm text-base-content/60">
                                                by {item.author_name}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Link to={`/article/${item._id}`} className="btn btn-ghost btn-circle btn-sm">
                                                <ExternalLink size={18} />
                                            </Link>
                                            <button
                                                onClick={() => removeBookmark(item._id)}
                                                className="btn btn-ghost btn-circle btn-sm text-error hover:bg-error/10"
                                                title="Remove Bookmark"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-20 text-base-content/30"
                            >
                                <Inbox size={64} strokeWidth={1} />
                                <p className="text-xl font-medium mt-4">No bookmarks found</p>
                                <Link to="/" className="btn btn-primary btn-sm mt-4">
                                    Browse Articles
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default BookmarkPage;
