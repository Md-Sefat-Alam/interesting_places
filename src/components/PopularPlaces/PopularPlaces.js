import React from 'react';
import './PopularPlaces.css'

const PopularPlaces = ({ placesInfo, setVisableOrNot, setEditVisableOrNot, setEditKey }) => {
    const handleEditBtn = (_key) => {
        setEditVisableOrNot({ right: '0' })
        setEditKey(_key);
    }
    return (
        <div className='my-10  xl:p-12 md:p-5 sm:p-3 bg-zinc-200/80 rounded-md mx-4'>
            <div className='flex w-full'>
                <h4 className='text-2xl font-bold'>Popular Places</h4>
                <div style={{ height: "15px" }} className='bg-gray-300 rounded mt-3 ml-3 flex-grow'></div>
            </div>

            <div className='bg-white mt-10 rounded-lg'>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-5 p-5 '>

                    {/* <div className='flex flex-col border rounded-lg py-4 px-2'>
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
                    </div> */}

                    {/* dynamically add card */}
                    {
                        (placesInfo !== null) ? placesInfo.map(singlePlace => {
                            const { district, divison, img, pakages, popularPlaces, _key } = singlePlace;
                            return (
                                <div key={_key} className='flex flex-col border rounded-lg py-4 px-2'>
                                    <div style={{ height: '180px' }} className='bg-gray-200 rounded overflow-hidden w-full'>
                                        <img className="" src={img} alt="" />
                                    </div>
                                    <div style={{ minHeight: '180px' }}>
                                        <div className='my-2 ml-2'>
                                            <span className='text-gray-400 text-sm'>Divison:</span><h4 className='inline text-gray-800 font-bold'> {divison}</h4>
                                            <br />
                                            <span className='text-gray-400 text-sm'>District:</span><h5 className='inline text-orange-400 font-bold'> {district}</h5>
                                        </div>
                                        {
                                            (popularPlaces.length > 0) && <div className='my-1 ml-5'>
                                                <span className='text-gray-400 text-sm'>Popular Places:</span>
                                                <p className='inline'>
                                                    {
                                                        (popularPlaces.length > 0) && popularPlaces.map(singleData => <span> {singleData}, </span>)
                                                    }
                                                </p>
                                            </div>
                                        }
                                        {
                                            (pakages.length > 0) && <div className='my-1 ml-5'>
                                                <span className='text-gray-400 text-sm'>Packages:</span>
                                                <p className='inline'>
                                                    {
                                                        (pakages.length > 0) && pakages.map(singleData => <span className='text-sm'> {singleData.name}, </span>)
                                                    }
                                                </p>
                                            </div>
                                        }
                                    </div>
                                    <div className=''>
                                        <button onClick={() => handleEditBtn(_key)} className='w-full font-bold text-gray-900 bg-blue-500/50 my-2 rounded-lg py-2 hover:bg-blue-500/80 transition-colors'>Edit</button>
                                    </div>
                                </div>
                            )
                        })
                            :
                            <div style={{ minHeight: '200px' }} className='flex justify-center align-middle mt-16'>
                                <p className='text-red-400 text-2xl'>No Data. <button onClick={() => setVisableOrNot({ right: "0", transition: 'all 0.3s' })} className='text-green-500'>Add Now?</button></p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularPlaces;