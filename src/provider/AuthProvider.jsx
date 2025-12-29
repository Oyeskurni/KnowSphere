import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/comments")
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.error(err))
    }, []);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);



    const authInfo = {
        user,
        setUser,
        comments,
        setComments,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;