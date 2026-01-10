import React from 'react';

const TopContributors = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div data-aos="fade-up" className="card bg-base-200">
                <div className="card-body">
                    <h3 className="font-bold">🏆 Top Contributors</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Afra Anjum</li>
                        <li>Kuroo Tetsurō</li>
                        <li>Oyes Islam</li>
                    </ul>
                </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="200" className="card bg-base-100 border">
                <div className="card-body text-sm">
                    <h3 className="font-bold">📘 About KnowSphere</h3>
                    <p>
                        KnowSphere is a student-friendly platform for sharing articles,
                        ideas, and learning together.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default TopContributors;