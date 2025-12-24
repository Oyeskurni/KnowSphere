import { Link } from "react-router";
import knwoImage from '../assets/sharing-idea.jpg'
const Banner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Text Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Share Your Knowledge <br />
                            <span className="text-primary">With the World</span>
                        </h1>

                        <p className="mt-4 text-gray-600 text-lg">
                            Write articles, share ideas, and help others grow by spreading
                            your knowledge in technology, programming, and more.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link
                                to="/all-articles"
                                className="btn btn-primary"
                            >
                                Explore Articles
                            </Link>

                            <Link
                                to="/post-article"
                                className="btn btn-outline"
                            >
                                Write an Article
                            </Link>
                        </div>
                    </div>

                    {/* Image / Illustration */}
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="bottom-center" className="hidden md:block">
                        <img
                            src={knwoImage}
                            alt="Knowledge Sharing"
                            className="w-full"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
