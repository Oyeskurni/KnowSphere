export const myArticlesPromise = (email, token) => {
    return fetch(`http://localhost:5000/articles?email=${email}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            credentials: 'include'
        }
    ).then(res => res.json());
};
