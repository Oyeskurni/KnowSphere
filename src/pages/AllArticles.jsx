import { Link, useLoaderData } from "react-router";
import ArticleCard from "../components/ArticleCard";

const AllArticles = () => {
    const articles = useLoaderData();

    return (
        <section className="bg-base-200 min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* ================= HEADER ================= */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                    <div>
                        <h1 className="text-4xl font-black mb-2">Latest Articles</h1>
                        <p className="text-base-content/60">
                            Stay updated with the latest trends and tutorials.
                        </p>
                    </div>

                    <Link to="/post-article" className="btn btn-primary">
                        Write an Article
                    </Link>
                </div>

                {/* =================  FILTER SECTION ================= */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {/* ALL */}
                    <Link to="/all-articles" className="btn btn-outline btn-sm">
                        All
                    </Link>

                    {/* CATEGORY FILTER */}
                    <Link
                        to="/all-articles?category=Programming"
                        className="btn btn-outline btn-sm"
                    >
                        Programming
                    </Link>

                    <Link
                        to="/all-articles?category=Design"
                        className="btn btn-outline btn-sm"
                    >
                        Design
                    </Link>

                    <Link
                        to="/all-articles?category=Technology"
                        className="btn btn-outline btn-sm"
                    >
                        Technology
                    </Link>

                    {/* TAG FILTER */}
                    <Link
                        to="/all-articles?tag=react"
                        className="btn btn-outline btn-sm"
                    >
                        React
                    </Link>

                    <Link
                        to="/all-articles?tag=javascript"
                        className="btn btn-outline btn-sm"
                    >
                        JavaScript
                    </Link>

                    <Link
                        to="/all-articles?tag=css"
                        className="btn btn-outline btn-sm"
                    >
                        CSS
                    </Link>
                </div>

                {/* ================= ARTICLES GRID ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles && articles.length > 0 ? (
                        articles.map(article => (
                            <ArticleCard key={article._id} article={article} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">
                            No articles found for this filter
                        </p>
                    )}
                </div>

            </div>
        </section>
    );
};

export default AllArticles;
