import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import useAuth from "../hooks/useAuth";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const { createUser, setUser } = useAuth();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, displayName, photoURL } = Object.fromEntries(formData.entries());

        console.log(email, password, displayName, photoURL);
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                updateProfile(user, {
                    displayName
                    , photoURL
                }).then(() => {
                    setUser({ ...user, displayName, photoURL });
                    navigate('/');
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);

            });
    }

    return (
        <div className="flex justify-center items-center h-screen bg-base-200">
            <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-500">
                    Register on <span className="text-primary">KnowSphere</span>
                </h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered input-primary w-full"
                            name="displayName"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            className="input input-bordered input-accent w-full"
                            name="photoURL"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered input-primary w-full"
                            name="email"
                            required
                        />
                    </div>

                    {/* Password Input with Toggle */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-secondary">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="input input-bordered input-primary w-full pr-10"
                            name="password"
                            required
                        />
                        <span
                            className="absolute right-3 top-9 cursor-pointer text-xl z-10 text-primary"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>

                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Register
                    </button>
                </form>

                {/* Error Message */}
                {error && <p className="text-error text-center">{error}</p>}

                {/* Already have an account */}
                <p className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="link link-hover text-primary font-semibold">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
