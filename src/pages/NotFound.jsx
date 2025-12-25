import { Link } from "react-router"; // Modern v7+ import
import { motion } from "framer-motion"; // Optional: adds a premium feel
import notFoundImg from "../assets/404-landing-page-free-vector.jpg";

const NotFound = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-base-100 px-6 py-12">
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Image Section with a subtle entrance animation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <img
                        src={notFoundImg}
                        alt="Illustration of a person looking at a giant 404 sign"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center md:text-left"
                >
                    <header>
                        <span className="text-sm font-bold tracking-widest uppercase text-primary/60">
                            Error 404
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-base-content mt-2 mb-4">
                            Lost in Space?
                        </h1>
                    </header>

                    <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                        The page you’re looking for has either vanished into the digital void
                        or was never here to begin with.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link to="/" className="btn btn-primary btn-lg shadow-lg">
                            Return Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-ghost btn-lg"
                        >
                            Go Back
                        </button>
                    </div>
                </motion.div>

            </div>
        </main>
    );
};

export default NotFound;