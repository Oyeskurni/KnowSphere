import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router';
const SocialMediaLinks = () => {
    const socialMedia = [
        {
            name: 'Twitter',
            url: 'https://www.twitter.com',
            icon: <FaSquareXTwitter />,
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com',
            icon: <FaFacebookSquare />,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com',
            icon: <FaLinkedin />,
        },
        {
            name: 'Github',
            url: 'https://www.github.com',
            icon: <FaSquareGithub />,
        }

    ];
    return (
        <div>
            {
                socialMedia.map((media, index) => (
                    <div key={index} className='inline-block mx-2 text-2xl pt-3'>
                        <Link
                            to={media.url}
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            {media.icon}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default SocialMediaLinks;