import { Link } from "react-router";
import knwoImage from '../assets/sharing-idea.jpg'
import DrawCircleText from "./DrawCircleText";
const Banner = () => {


    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Text Content */}
                    <div>
                        <DrawCircleText></DrawCircleText>
                        {/* <h1 data-aos="fade-up" className="text-4xl md:text-5xl font-bold leading-tight">
                            Share Your Knowledge <br />
                            <span className="text-primary">With the World</span>
                        </h1> */}

                        <p data-aos="fade-up" data-aos-delay="50" className="mt-4 text-gray-600 text-lg">
                            Write articles, share ideas, and help others grow by spreading
                            your knowledge in technology, programming, and more.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link
                                data-aos="fade-right"
                                data-aos-delay="100"
                                to="/all-articles"
                                className=" border-2 border-dashed border-black px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]  active:rounded-2xl bg-white text-black shadow-[4px_4px_0px_black] active:shadow-none"
                            >
                                Explore Articles
                            </Link>

                            <Link
                                data-aos="fade-left"
                                data-aos-delay="200"
                                to="/post-article"
                                className="bg-indigo-500 px-6 py-3 font-medium text-white transition-all duration-300 shadow-[3px_3px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                            >
                                Write an Article
                            </Link>
                        </div>

                    </div>

                    {/* Image / Illustration */}
                    <div data-aos="fade-up"
                        className="hidden md:block">
                        <img
                            src={knwoImage}
                            alt="Knowledge Sharing"
                            className="w-full"
                        />
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Banner;
