import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AllArticles from '../pages/AllArticles';
import PostArticle from './../pages/PostArticle';
import MyArticle from './../pages/MyArticle';
import About from './../pages/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,

        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/all-articles',
                element: <AllArticles />
            },
            {
                path: '/article/:id',
                element: <AllArticles />
            },
            {
                path: '/post-article',
                element: <PostArticle />
            },
            {
                path: '/my-articles',
                element: <MyArticle />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '*',
                element: <div>404 Not Found</div>
            }
        ]
    }
])

export default router;