import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const CommentsList = () => {
    // const [comments, setComments] = useState([]);
    const { loading, setLoading } = useAuth();
    const { comments } = useAuth();

    // useEffect(() => {
    //     axios.get("http://localhost:5000/comments")
    //         .then(res => {
    //             setComments(res.data);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             setLoading(false);
    //         });
    // }, []);

    if (loading) {
        return <p>Loading comments...</p>;
    }

    const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);

        if (seconds < 60) return "Just now";

        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} min ago`;

        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

        const days = Math.floor(hours / 24);
        if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

        const weeks = Math.floor(days / 7);
        if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

        return new Date(date).toLocaleDateString();
    };


    return (
        <div className="mt-12 space-y-8">
            {comments.map(comment => (
                <div key={comment._id} className="flex gap-4">
                    <div className="avatar h-12 w-12 shrink-0">
                        <div className="rounded-full ring-1 ring-base-300">
                            <img src={comment.user_photo} alt="User" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-base">
                                    {comment.user_name}
                                </span>
                                <span className="text-xs opacity-50">
                                    {timeAgo(comment.createdAt)}
                                </span>
                            </div>

                            <p className="text-base-content/80">
                                {comment.content}
                            </p>
                        </div>

                        {/* <div className="flex gap-4 mt-2 ml-2">
                            <button className="text-xs font-bold hover:underline opacity-60">
                                Like
                            </button>
                            <button className="text-xs font-bold hover:underline opacity-60">
                                Reply
                            </button>
                        </div> */}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default CommentsList;