import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { signIn, googleSignIn } = use(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());
        console.log(email, password);

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);


                // setError(null);
                // form.reset();
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleGoogleClick = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate("/");
            }).catch((error) => {
                console.error(error);
            });
    }


    return (
        <div className="flex justify-center items-center h-[90vh] bg-base-200">
            <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-500">
                    Login to <span className="text-primary">KnowSphere</span>
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email Input */}
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
                        <span className="label-text-alt link link-hover text-accent mt-1">
                            Forgot Password?
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Login Buttons */}
                <div className="flex flex-col w-full md:flex-row justify-between items-center gap-4">
                    {/* Google Login */}
                    <button
                        onClick={handleGoogleClick}
                        className="w-full md:w-auto btn btn-outline flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </button>

                    {/* GitHub */}
                    <button className="w-full md:w-auto btn bg-neutral text-neutral-content">
                        <AiFillGithub className="text-xl" />
                        Login with GitHub
                    </button>
                </div>

                {/* Error */}
                {error && <p className="text-error text-center">{error}</p>}

                {/* Register Link */}
                <p className="text-center text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="link link-hover text-primary font-semibold">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
