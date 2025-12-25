import { useState } from "react";
import { Link } from "react-router"; // v7+
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Search, Trash2, Clock, ExternalLink, Inbox } from "lucide-react";

const BookmarkPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // Mock data for bookmarked articles
    const [bookmarks, setBookmarks] = useState([
        {
            id: "1",
            title: "The Future of AI in Student Life",
            author: "Afra Anjum",
            date: "Jun 12",
            category: "Education",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80"
        },
        {
            id: "2",
            title: "Mastering Tailwind CSS Grid Layouts",
            author: "John Doe",
            date: "Dec 20",
            category: "Design",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80"
        }
    ]);

    const removeBookmark = (id) => {
        setBookmarks(bookmarks.filter((item) => item.id !== id));
    };

    const filteredBookmarks = bookmarks.filter((b) =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-base-200/50 py-10 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-black flex items-center gap-3">
                            <Bookmark className="text-primary" size={36} fill="currentColor" />
                            Reading List
                        </h1>
                        <p className="text-base-content/60 mt-2">
                            You have {bookmarks.length} articles saved for later.
                        </p>
                    </div>

                    {/* Search Bar */}
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

                {/* Bookmarks Grid */}
                <div className="grid gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredBookmarks.length > 0 ? (
                            filteredBookmarks.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="group card card-side bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all overflow-hidden"
                                >
                                    {/* Thumbnail */}
                                    <figure className="hidden sm:block w-48 shrink-0">
                                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
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
                                            <Link to={`/article/${item.id}`}>
                                                <h2 className="card-title text-lg md:text-xl group-hover:text-primary transition-colors line-clamp-1">
                                                    {item.title}
                                                </h2>
                                            </Link>
                                            <p className="text-sm text-base-content/60">by {item.author}</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Link to={`/article/${item.id}`} className="btn btn-ghost btn-circle btn-sm">
                                                <ExternalLink size={18} />
                                            </Link>
                                            <button
                                                onClick={() => removeBookmark(item.id)}
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
                                <Link to="/" className="btn btn-primary btn-sm mt-4">Browse Articles</Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default BookmarkPage;