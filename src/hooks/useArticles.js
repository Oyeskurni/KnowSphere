import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useArticles = () => {
const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('https://knowledge-server-xhu2.onrender.com/articles')
            .then(res => {
                setArticles(res.data);
            })
        .catch(err => console.log(err));
    }, []);
    
    return {articles};
};

export default useArticles;