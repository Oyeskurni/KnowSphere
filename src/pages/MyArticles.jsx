import React, { useEffect, useState } from 'react';
import useAuth from './../hooks/useAuth';
import { myArticlesPromise } from '../api/myArticlesPromise';
import MyArticlesList from '../components/MyArticlesList';

const MyArticles = () => {
    const { user, loading, setLoading } = useAuth();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (user?.email) {
            myArticlesPromise(user.email)
                .then(data => {
                    setArticles(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (!user) return <p>Please login first</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <MyArticlesList article={articles}></MyArticlesList>
        </div>
    );
};

export default MyArticles;
