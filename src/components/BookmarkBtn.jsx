import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const BookmarkBtn = ({ articleId }) => {
    const { user } = useAuth();
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        if (!user) return;

        axios.get('http://localhost:5000/bookmarks/check', {
            params: {
                articleId,
                user_email: user.email
            }
        }).then(res => {
            setIsBookmarked(res.data.bookmarked);
        });
    }, [articleId, user]);

    const handleBookmark = async () => {
        const res = await axios.post('http://localhost:5000/bookmarks', {
            articleId,
            user_email: user.email
        });

        setIsBookmarked(res.data.bookmarked);
    };

    return (
        <button
            onClick={handleBookmark}
            className={`btn btn-ghost btn-circle btn-sm ${isBookmarked ? 'text-primary' : 'text-base-content/40'}`}
        >
            {isBookmarked ? <FaBookmark size={18} /> : <FaRegBookmark size={18} />}
        </button>
    );
};

export default BookmarkBtn;
