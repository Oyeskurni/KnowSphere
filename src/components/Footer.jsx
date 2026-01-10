import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {

    const quickLinks = [
        { name: 'Home', link: '#' },
        { name: 'Posts', link: '#' },
        { name: 'Create Post', link: '#' },
        { name: 'About', link: '#' },
        { name: 'Contact', link: '#' },
    ]

    const resources = [
        { name: 'Privacy Policy', link: '#' },
        { name: 'Terms & Conditions', link: '#' },
        { name: 'Help Center', link: '#' },
    ]
    return (
        <footer className=" text-base-content">

            {/* Top Footer */}
            <div className="
        max-w-7xl mx-auto 
        px-6 py-10
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-10
      ">

                {/* Brand */}
                <div >
                    <h2 data-aos="fade-up" className="text-2xl font-bold text-primary">KnowSphere</h2>
                    <p data-aos="fade-up" data-aos-delay="50" className="mt-3 text-sm leading-relaxed">
                        A modern platform to share posts, ideas and connect with people.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h6 data-aos="fade-up" className="footer-title">Quick Links</h6>
                    <ul data-aos="fade-up" data-aos-delay="100" className="space-y-2">
                        {
                            quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.link} className="link link-hover">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h6 data-aos="fade-up" className="footer-title">Resources</h6>

                    <ul data-aos="fade-up" data-aos-delay="100" className="space-y-2">
                        {
                            resources.map((resource, idx) => (
                                <li key={idx}>
                                    <a href={resource.link} className="link link-hover">{resource.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h6 data-aos="fade-up" className="footer-title">Social</h6>
                    <div data-aos="fade-up" data-aos-delay="100" className="mt-2">
                        <SocialMediaLinks></SocialMediaLinks>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-base-300">
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    className="
          max-w-7xl mx-auto 
          px-6 py-4
          text-center text-sm
        ">
                    © {new Date().getFullYear()} KnowSphere. All rights reserved.
                </div>
            </div>

        </footer>
    );
};

export default Footer;