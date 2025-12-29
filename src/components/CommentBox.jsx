import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CommentBox = ({ article_id }) => {
    const [comment, setComment] = useState("");
    const { user, comments, setComments } = useAuth();
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
            articleId: article_id,
            content: comment,
            user_name: user.displayName,
            user_email: user.email,
            user_photo: user.photoURL,
            createdAt: new Date()
        };

        try {
            const res = await axios.post('http://localhost:5000/comments', commentData);
            Swal.fire({
                icon: "success",
                title: "Comment Posted!",
                text: "Your comment has been added successfully",
                timer: 1500,
                showConfirmButton: false
            });

            // 🔥 INSTANT UI UPDATE
            setComments([res.data, ...comments]);
            setComment("");

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
                    <button type="submit" className="btn btn-primary btn-md md:btn-lg shadow-lg">
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentBox;