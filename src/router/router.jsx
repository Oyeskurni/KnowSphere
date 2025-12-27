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
import PrivateRoute from '../components/PrivateRoute';

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
                loader: () => fetch('http://localhost:5000/articles'),
                element: <AllArticles />
            },
            {
                path: '/article/:id',
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/articles/${params.id}`);

                    if (!res.ok) {
                        throw new Response("Article not found", { status: 404 });
                    }

                    return res.json();
                },
                element: <ArticleDetails></ArticleDetails>
            },
            {
                path: '/post-article',
                element: <PrivateRoute><PostArticle /></PrivateRoute>
            },
            {
                path: '/my-articles',
                element: <PrivateRoute><MyArticles /></PrivateRoute>
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