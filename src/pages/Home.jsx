import React from 'react';
import CategoryTabs from '../components/CategoryTabs ';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ContentLayout from '../components/ContentLayout';
import TopContributors from '../components/TopContributors';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pt-14 pb-20">
            <Banner />

            <div className="flex gap-5 mt-10">

                {/* LEFT SIDEBAR */}
                <aside className="flex-1 hidden md:block">
                    <div className="sticky top-24">
                        <CategoryTabs />

                        <div className="border-t border-base-300 mt-6 pt-6">
                            <SocialMediaLinks />
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-[3]">
                    <ContentLayout />
                </main>

                {/* RIGHT SIDEBAR */}
                <aside className="flex-1 hidden lg:block">
                    <div className="sticky top-24">
                        <TopContributors />
                    </div>
                </aside>

            </div>
        </div>

    );
};

export default Home;