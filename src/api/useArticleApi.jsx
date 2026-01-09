import React from 'react';
import UseAxiosSecure from '../hooks/UseAxiosSecure';

const useArticleApi = () => {
    const axiosSecure = UseAxiosSecure();

    const myArticlesPromise = email => {
        return axiosSecure.get(`/my-articles?email=${email}`)
            .then(res => res.data);
    }
    return { myArticlesPromise };
};

export default useArticleApi;