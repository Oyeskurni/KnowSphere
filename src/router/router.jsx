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
import UpdateArticle from '../pages/UpdateArticle';
import EditProfileForm from '../components/EditProfileForm';

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
                loader: async ({ request }) => {
                    const url = new URL(request.url);

                    const category = url.searchParams.get("category");
                    const tag = url.searchParams.get("tag");

                    let apiUrl = "https://knowledge-server-1.onrender.com/articles";

                    const params = new URLSearchParams();

                    if (category) params.append("category", category);
                    if (tag) params.append("tag", tag);

                    if ([...params].length > 0) {
                        apiUrl += `?${params.toString()}`;
                    }

                    const res = await fetch(apiUrl);

                    if (!res.ok) {
                        throw new Error("Failed to fetch articles from server");
                    }

                    return res.json(); // return JSON
                },

                element: <AllArticles />
            },

            {
                path: '/article/:id',
                loader: async ({ params }) => {
                    const res = await fetch(`https://knowledge-server-1.onrender.com/articles/${params.id}`);

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
                path: '/update-article/:id',
                loader: async ({ params }) => {
                    const res = await fetch(`https://knowledge-server-1.onrender.com/articles/${params.id}`);

                    if (!res.ok) {
                        throw new Response("Article not found", { status: 404 });
                    }

                    return res.json();
                },
                element: <PrivateRoute><UpdateArticle /></PrivateRoute>
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
                path: '/setting',
                element: <Setting></Setting>
            },
            {
                path: '/edit-profile',
                element: <EditProfileForm></EditProfileForm>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;