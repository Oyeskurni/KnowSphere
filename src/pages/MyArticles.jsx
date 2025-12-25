import { useState } from "react";
import { Link, useNavigate } from "react-router"; // Modern v7+
import { Edit3, Trash2, Eye, AlertCircle } from "lucide-react";
import Swal from "sweetalert2"; // Highly recommended for delete confirmations

const MyArticles = () => {
    const navigate = useNavigate();

    // Mock data: In a real app, you would fetch this using the user's email
    const [articles, setArticles] = useState([
        {
            id: "1",
            title: "The Future of AI in Student Life",
            category: "Education",
            date: "2025-12-20",
            status: "Published"
        },
        {
            id: "2",
            title: "React Router v7 Migration Guide",
            category: "Tech",
            date: "2025-12-22",
            status: "Draft"
        }
    ]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Logic: Send DELETE request to API
                setArticles(articles.filter(art => art.id !== id));
                Swal.fire("Deleted!", "Your article has been removed.", "success");
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
                            {/* Head */}
                            <thead className="bg-base-300">
                                <tr className="text-sm uppercase text-base-content/70">
                                    <th className="rounded-none">#</th>
                                    <th>Article Title</th>
                                    <th>Category</th>
                                    <th>Published Date</th>
                                    <th>Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {articles.length > 0 ? (
                                    articles.map((art, index) => (
                                        <tr key={art.id} className="hover:bg-base-200/50 transition-colors">
                                            <th>{index + 1}</th>
                                            <td className="font-bold max-w-xs truncate">{art.title}</td>
                                            <td>
                                                <div className="badge badge-outline badge-sm">{art.category}</div>
                                            </td>
                                            <td>{art.date}</td>
                                            <td>
                                                <span className={`badge badge-sm ${art.status === 'Published' ? 'badge-success' : 'badge-ghost'}`}>
                                                    {art.status}
                                                </span>
                                            </td>
                                            <td className="flex justify-center gap-2">
                                                {/* View Action */}
                                                <div className="tooltip" data-tip="View">
                                                    <Link to={`/article/${art.id}`} className="btn btn-square btn-sm btn-ghost">
                                                        <Eye size={18} />
                                                    </Link>
                                                </div>

                                                {/* Edit Action */}
                                                <div className="tooltip" data-tip="Edit">
                                                    <Link to={`/update-article/${art.id}`} className="btn btn-square btn-sm btn-info btn-outline">
                                                        <Edit3 size={18} />
                                                    </Link>
                                                </div>

                                                {/* Delete Action */}
                                                <div className="tooltip" data-tip="Delete">
                                                    <button
                                                        onClick={() => handleDelete(art.id)}
                                                        className="btn btn-square btn-sm btn-error btn-outline"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-10">
                                            <div className="flex flex-col items-center opacity-50">
                                                <AlertCircle size={48} />
                                                <p className="mt-2 text-lg font-semibold">No articles found.</p>
                                                <Link to="/create-article" className="link link-primary mt-1">Start writing your first post!</Link>
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

export default MyArticles;