import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <header className="py-2 fixed w-full">
            <div className='container flex justify-center lg:justify-between'>
                <div className="font-bold text-3xl cursor-pointer select-none text-center lg:text-left w-full lg:w-1/2">
                    <h3 className="text-yellow-300 mx-4">Popular <span className="font-bold text-white">Places</span></h3>
                </div>
                <nav className='w-1/2 hidden lg:block'>
                    <ul className='flex text-white'>
                        <li className='cursor-pointer select-none mx-2 font-bold text-md text-white hover:text-gray-300'>Home</li>
                        <li className='cursor-pointer select-none mx-2 text-md hover:text-gray-300'>Favorite Place</li>
                        <li className='cursor-pointer select-none mx-2 text-md hover:text-gray-300'>About Us</li>
                        <li className='cursor-pointer select-none mx-2 text-md hover:text-gray-300'>Blogs</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;