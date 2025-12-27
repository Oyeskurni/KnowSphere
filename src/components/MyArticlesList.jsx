import React, { useState, useEffect } from "react";
// FIXED: Import from 'react-router-dom' for web apps
import { Link } from "react-router";
import { Eye, Edit3, Trash2, AlertCircle } from "lucide-react";
import Swal from "sweetalert2";

const MyArticlesList = ({ article }) => {
    const [articles, setArticles] = useState(article || []);

    // Sync state if the prop changes in the parent component
    useEffect(() => {
        setArticles(article || []);
    }, [article]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This article will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`http://localhost:5000/articles/${id}`, {
                        method: "DELETE",
                    });

                    if (!res.ok) throw new Error("Failed to delete the article");

                    const data = await res.json();

                    // UI Update
                    if (data.deletedCount > 0) {
                        setArticles(prev => prev.filter(art => art._id !== id));

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your article has been deleted.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    }
                } catch (error) {
                    Swal.fire("Error", error.message, "error");
                }
            }
        });
    };

    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-black">My Articles</h1>
                        <p className="text-base-content/60">Manage and track your published content</p>
                    </div>
                    <Link to="/create-article" className="btn btn-primary">
                        + Write New Article
                    </Link>
                </div>

                {/* Table Container */}
                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead className="bg-base-300">
                                <tr className="text-sm uppercase text-base-content/70">
                                    <th>#</th>
                                    <th>Article Title</th>
                                    <th>Category</th>
                                    <th>Published Date</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {articles.length > 0 ? (
                                    articles.map((art, index) => (
                                        <tr key={art._id || index} className="hover:bg-base-200/50 transition-colors">
                                            <th>{index + 1}</th>
                                            <td className="font-bold max-w-xs truncate">{art.title}</td>
                                            <td>
                                                <span className="badge badge-outline badge-sm">
                                                    {art.category}
                                                </span>
                                            </td>
                                            <td>{art.date || "N/A"}</td>

                                            <td className="flex justify-center gap-2">
                                                <Link to={`/article/${art._id}`} className="btn btn-square btn-sm btn-ghost" title="View">
                                                    <Eye size={18} />
                                                </Link>
                                                <Link to={`/update-article/${art._id}`} className="btn btn-square btn-sm btn-info btn-outline" title="Edit">
                                                    <Edit3 size={18} />
                                                </Link>
                                                <button onClick={() => handleDelete(art._id)} className="btn btn-square btn-sm btn-error btn-outline" title="Delete">
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-10">
                                            <div className="flex flex-col items-center opacity-50">
                                                <AlertCircle size={48} />
                                                <p className="mt-2 text-lg font-semibold">No articles found.</p>
                                                <Link to="/create-article" className="link link-primary mt-1">
                                                    Start writing your first post!
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArticlesList;