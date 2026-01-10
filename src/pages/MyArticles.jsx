import React, { useEffect, useState } from 'react';
import useAuth from './../hooks/useAuth';
import MyArticlesList from '../components/MyArticlesList';
import useArticleApi from '../api/useArticleApi';

const MyArticles = () => {
    const { user, loading, setLoading } = useAuth();
    const [articles, setArticles] = useState([]);
    const { myArticlesPromise } = useArticleApi();
    console.log(articles);

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
