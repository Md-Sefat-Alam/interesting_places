import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='flex align-middle'>
                    <div className='leftSideLogo w-1/2 mt-40 text-center'>
                        <h3 className="text-5xl cursor-pointer select-none font-bold text-yellow-600 mx-4">Popular <span className="font-bold text-gray-900">Places</span></h3>
                    </div>
                    <div className='w-1/2 flex justify-center mt-32 footerList text-white'>
                        <ul className='text-left'>
                            <li>Home</li>
                            <li>Favorite Place</li>
                            <li>About Us</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-16 text-center'>
                    <h4> &copy; All Right Reserved By <h3 className="text-xl inline cursor-pointer select-none font-bold text-yellow-600 mx-4">Popular <span className="font-bold text-gray-900">Places</span></h3></h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;