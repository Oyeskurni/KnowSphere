import { Heart } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const LikeUnlike = ({ articleId, likes = [], likesCount = 0 }) => {
    const { user } = useAuth();

    const [liked, setLiked] = useState(
        user ? likes.includes(user.uid) : false
    );
    const [count, setCount] = useState(likesCount);

    const handleLike = async () => {
        if (!user) {
            return Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: "Please login to like this article"
            });
        }

        try {
            await axios.patch(
                `http://localhost:5000/articles/like/${articleId}`,
                { userId: user.uid }
            );

            setLiked(!liked);
            setCount(prev => liked ? prev - 1 : prev + 1);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            onClick={handleLike}
            className="flex items-center gap-1.5 hover:bg-base-200 px-2 py-1 rounded-lg cursor-pointer transition-colors"
        >
            <Heart
                size={16}
                className={liked ? "fill-error text-error" : "text-base-content/60"}
            />
            <span>{count}</span>
        </div>
    );
};

export default LikeUnlike;
