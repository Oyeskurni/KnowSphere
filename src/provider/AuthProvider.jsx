import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

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

            if (user?.email) {
                axios.post('https://knowledge-server-1.onrender.com/jwt',
                    { email: user.email },
                    {
                        withCredentials: true
                    }
                )
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
        return () => unsubscribe();
    }, []);





    // AOS init
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: "ease-in-out",
        });
    }, []);

    // refresh when data changes (important for loader data)
    useEffect(() => {
        Aos.refresh();
    }, []);







    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;