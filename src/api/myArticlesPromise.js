export const myArticlesPromise = (email, token) => {
    return fetch(`https://knowledge-server-wkhc.onrender.com/articles?email=${email}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            credentials: 'include'
        }
    ).then(res => res.json());
};
