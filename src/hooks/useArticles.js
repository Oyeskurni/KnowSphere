import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useArticles = () => {
const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/articles')
            .then(res => {
                setArticles(res.data);
            })
        .catch(err => console.log(err));
    }, []);
    
    return {articles};
};

export default useArticles;