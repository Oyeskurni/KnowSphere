import React from 'react';

import ArticleCard from './ArticleCard';
const ContentLayout = ({ articles }) => {

    return (
        <div className="max-w-7xl mx-auto px-4 ">
            {
                articles.map((article) => <ArticleCard key={article._id} article={article} />)
            }
        </div>

    );
};

export default ContentLayout;