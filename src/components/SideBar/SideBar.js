import React from 'react';
import './SideBar.css'

const SideBar = ({ visableOrNot, setVisableOrNot }) => {
    const handleSubmit = () => {
        // Event.preventDefault();

    }
    const handleBackBtn = () => {
        setVisableOrNot({ right: '-9999px', transition: 'all 0.5s' })
    }
    return (
        <aside style={visableOrNot} className='sideBar w-1/3 fixed border-l-2'>
            <div className='h-16'>
            </div>

            <div>
                <button onClick={handleBackBtn} className='bg-red-600 px-3 py-2 rounded-md text-white ml-10'>&#8592; Back</button>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='formContentWrapper pb-5'>
                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="searchAbleDropdown">Divison</label>
                            <input className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='searchAbleDropdown' name='searchAbleDropdown' type="text" placeholder='Type here' />
                            <span className='-ml-8'><i class="fas fa-search text-xl text-gray-400"></i></span>
                        </div>
                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="dropDown">District</label>
                            <input className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='dropDown' name='dropDown' type="text" placeholder='Type here' />
                            <span className='-ml-8'><i class="fas fa-chevron-circle-down text-xl text-gray-400"></i></span>
                        </div>

                        <div className='mx-5 mt-5'>

                            <div>
                                <label className='block' htmlFor="popularPlace">Popular Place</label>
                                <input className='w-3/4 rounded-md py-2 px-3 border-2 focus:outline-blue-500' id='popularPlace' name='popularPlace' type="text" placeholder='Type here' defaultValue={'Popular Place 1'} />
                                <div className='inline-block w-1/4 cursor-pointer select-none'>
                                    <div className='w-full flex justify-center align-middle'>
                                        <div className='bg-gray-400 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center'>
                                            <i class="fas fa-minus text-xl text-gray-100 mt-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 1 */}
                            <div className='mt-2'>
                                <input className='w-3/4 rounded-md py-2 px-3 border-2 focus:outline-blue-500 ' id='popularPlace' name='popularPlace' type="text" placeholder='Type here' defaultValue={'Popular Place 2'} />
                                <div className='inline-block w-1/4 cursor-pointer select-none'>
                                    <div className='w-full flex justify-center align-middle'>
                                        <div className='bg-gray-400 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center'>
                                            <i class="fas fa-minus text-xl text-gray-100 mt-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className='mt-2'>
                                <div className='w-3/4 rounded-md py-2 px-3  border-2 border-dashed border-gray-500 text-center cursor-pointer select-none'>
                                    <button onClick={() => { Event.preventDefault() }} className='text-blue-500'>+ add a place</button>
                                </div>

                            </div>
                            {/* 2 */}

                        </div>
                        {/* end add popular place */}

                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="dropDown">Packages</label>
                            <input className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='dropDown' name='dropDown' type="text" placeholder='Type here' />
                            <span className='-ml-8'><i class="fas fa-chevron-circle-down text-xl text-gray-400"></i></span>
                        </div>
                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="dropDown">Packages</label>
                            <input className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='dropDown' name='dropDown' type="text" placeholder='Type here' />
                            <span className='-ml-8'><i class="fas fa-chevron-circle-down text-xl text-gray-400"></i></span>
                        </div>
                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="dropDown">Packages</label>
                            <input className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='dropDown' name='dropDown' type="text" placeholder='Type here' />
                            <span className='-ml-8'><i class="fas fa-chevron-circle-down text-xl text-gray-400"></i></span>
                        </div>

                    </div>
                    {/* end form content */}

                    <div className='flex justify-evenly bg-gray-200 py-2'>
                        <button>Cancel</button>
                        <button className='py-2 px-4 bg-blue-400 rounded-md text-white'>Submit</button>
                    </div>
                    {/* end form submit */}
                </form>
            </div>

        </aside>
    );
};

export default SideBar;