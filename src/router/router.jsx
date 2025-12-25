import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AllArticles from '../pages/AllArticles';
import PostArticle from './../pages/PostArticle';
import About from './../pages/About';
import Login from '../pages/Login';
import Register from './../pages/Register';
import NotFound from '../pages/NotFound';
import ArticleDetails from '../pages/ArticleDetails';
import MyArticles from '../pages/MyArticles';
import BookmarkPage from '../pages/BookmarkPage';
import Setting from '../pages/Setting';

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
                element: <MyArticles />
            },
            {
                path: '/article-details',
                element: <ArticleDetails />
            },
            {
                path: '/bookmark',
                element: <BookmarkPage></BookmarkPage>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/profile',
                element: <Setting></Setting>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;