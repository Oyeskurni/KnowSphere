import { Link } from "react-router";
import ArticleCard from "../components/ArticleCard";

const AllArticles = () => {
    // Example data array
    const articles = [
        {
            _id: "1",
            title: "Understanding the New React Router v7 Features",
            authorName: "Sarah Drasner",
            publishedDate: "Dec 20, 2025",
            category: "Development",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
        },
        {
            _id: "1",
            title: "Understanding the New React Router v7 Features",
            authorName: "Sarah Drasner",
            publishedDate: "Dec 20, 2025",
            category: "Development",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
        },
        {
            _id: "1",
            title: "Understanding the New React Router v7 Features",
            authorName: "Sarah Drasner",
            publishedDate: "Dec 20, 2025",
            category: "Development",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
        },
        {
            _id: "1",
            title: "Understanding the New React Router v7 Features",
            authorName: "Sarah Drasner",
            publishedDate: "Dec 20, 2025",
            category: "Development",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
        },
    ];

    return (
        <section className="bg-base-200 min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="text-4xl font-black mb-2">Latest Articles</h1>
                        <p className="text-base-content/60">Stay updated with the latest trends and tutorials.</p>
                    </div>
                    <Link to="/post-article" className="btn btn-primary hidden md:flex">
                        Write an Article
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={article._id} article={article} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AllArticles;