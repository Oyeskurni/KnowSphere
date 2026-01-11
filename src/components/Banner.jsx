import { Link } from "react-router";
import knwoImage from '../assets/kno-1.jpg'
import DrawCircleText from "./DrawCircleText";
const Banner = () => {


    return (
        <div>
            <div className="max-w-7xl mx-auto sm:px-4 md:px-6 pb-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Text Content */}
                    <div>
                        <DrawCircleText></DrawCircleText>

                        <p data-aos="fade-up" data-aos-delay="50" className="mt-4 text-gray-600 text-lg">
                            Write articles, share ideas, and help others grow by spreading
                            your knowledge in technology, programming, and more.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link
                                data-aos="fade-right"
                                data-aos-delay="100"
                                to="/all-articles"
                                className=" border-2 border-dashed border-black px-6 py-3 
                                 font-semibold  uppercase transition-all duration-300 hover:translate-x-[-3px] hover:translate-y-[-3px]  active:rounded-2xl bg-white text-black shadow-[4px_4px_0px_black] active:shadow-none"
                            >
                                Explore Articles
                            </Link>

                            <Link
                                data-aos="fade-left"
                                data-aos-delay="200"
                                to="/post-article"
                                className="bg-indigo-500 px-6 py-3 font-medium text-white  uppercase transition-all duration-300 shadow-[4px_4px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
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
