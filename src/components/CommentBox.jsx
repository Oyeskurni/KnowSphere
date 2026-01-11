import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CommentBox = ({ articleId, refetch }) => {
    const [comment, setComment] = useState("");
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: "Please login to post a comment",
                confirmButtonText: "Login"
            }).then(() => {
                navigate('/login');
            });
        }

        if (!comment.trim()) {
            Swal.fire({
                icon: "error",
                title: "Empty Comment",
                text: "Comment cannot be empty!"
            });
            return;
        }
        const commentData = {
            articleId: articleId,
            content: comment,
            user_name: user.displayName,
            user_email: user.email,
            user_photo: user.photoURL,
            createdAt: new Date()
        };

        try {
            const res = await axios.post('https://knowledge-server-wkhc.onrender.com/comments', commentData);
            Swal.fire({
                icon: "success",
                title: "Comment Posted!",
                text: "Your comment has been added successfully",
                timer: 1500,
                showConfirmButton: false
            });

            setComment("");
            refetch();

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Failed!",
                text: "Something went wrong. Please try again."
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
                <textarea
                    className="textarea textarea-bordered w-full h-32 text-lg focus:ring-2 focus:ring-primary/20 border-base-300"
                    placeholder="Share your thoughts..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="flex justify-end">
                    <button type="submit" className="bg-indigo-500 px-6 py-3 font-medium text-white transition-all duration-300 shadow-[3px_3px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentBox;