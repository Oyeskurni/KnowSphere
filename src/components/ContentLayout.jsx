import React from 'react';

import ArticleCard from './ArticleCard';
const ContentLayout = ({ articles }) => {

    return (
        <div className="w-full mx-auto px-4 ">
            <div className='flex flex-col gap-7'>
                {
                    articles.map((article) => <ArticleCard key={article._id} article={article} />)
                }
            </div>
        </div>

    );
};

export default ContentLayout;