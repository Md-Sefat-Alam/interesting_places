import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='flex flex-col sm:flex-row align-middle '>
                    <div className='leftSideLogo w-full md:w-1/2 mt-40 text-center'>
                        <h3 className="text-xl sm:text-2xl md:5xl cursor-pointer select-none font-bold text-yellow-300 mx-4">Popular <span className="font-bold text-white">Places</span></h3>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center mt-5 sm:mt-32 footerList text-white'>
                        <ul className='text-center md:text-left'>
                            <li>Home</li>
                            <li>Favorite Place</li>
                            <li>About Us</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-16 text-center'>
                    <h4> &copy; All Right Reserved By <h3 className="text-sm md:xl inline cursor-pointer select-none font-bold text-yellow-300 mx-4">Popular <span className="font-bold text-white">Places</span></h3></h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;