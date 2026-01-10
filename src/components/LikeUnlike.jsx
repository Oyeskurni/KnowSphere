import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const LikeUnlike = ({ articleId, likes = [], likesCount = 0 }) => {
    const { user } = useAuth();

    const [liked, setLiked] = useState(
        user ? likes.includes(user.uid) : false
    );
    const [count, setCount] = useState(likesCount);

    useEffect(() => {
        setCount(likesCount);
        if (user) {
            setLiked(likes.includes(user.uid));
        }
    }, [likes, likesCount, user]);

    const handleLike = async () => {
        if (!user) {
            return Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: "Please login to like"
            });
        }

        await axios.patch(
            `https://knowledge-server-1.onrender.com/articles/like/${articleId}`,
            { userId: user.uid }
        );

        setLiked(!liked);
        setCount(prev => liked ? prev - 1 : prev + 1);
    };

    return (
        <div onClick={handleLike} className="flex items-center gap-2 cursor-pointer">
            <Heart
                size={16}
                className={liked ? "fill-error text-error" : ""}
            />
            <span>{count}</span>
        </div>
    );
};


export default LikeUnlike;
