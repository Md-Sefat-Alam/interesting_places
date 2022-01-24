import React from 'react';
import './PopularPlaces.css'

const PopularPlaces = () => {
    return (
        <div className='my-10  p-12 bg-zinc-200/80 rounded-md mx-4'>
            <div className='flex w-full'>
                <h4 className='text-2xl font-bold'>Popular Places</h4>
                <div style={{ height: "15px" }} className='bg-gray-300 rounded mt-3 ml-3 flex-grow'></div>
            </div>

            <div className='bg-white mt-10 rounded-lg'>
                <div className='grid grid-cols-3 gap-5 p-5 '>

                    <div className='flex flex-col border rounded-lg py-4 px-2'>
                        <div style={{ height: '150px' }} className='bg-gray-200 rounded'>
                            <img src="" alt="" />
                        </div>
                        <div className='my-5 ml-5'>
                            <h4 className='text-gray-800 font-bold'>Manik Goanj</h4>
                            <h5 className='text-orange-400 font-bold'>Horirampur</h5>
                        </div>
                        <div className=''>
                            <button className='w-full font-bold text-gray-900 bg-blue-500/50 my-2 rounded-lg py-2 hover:bg-blue-500/80 transition-colors'>Edit</button>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    );
};

export default PopularPlaces;