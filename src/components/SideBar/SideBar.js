import React, { useState, useEffect } from 'react';
import './SideBar.css'

const SideBar = ({ visableOrNot, setVisableOrNot }) => {
    let i = 102012;
    const [divisonData, setDivisonData] = useState([]);
    const [districtData, setDistrictData] = useState([]);

    const [divisonText, setDivisonText] = useState('');
    const [showSearchBox, setShowSearchBox] = useState({ visibility: 'hidden' })

    // fetch divison data from api
    useEffect(() => {
        fetch('https://engine.shikho.net/address?division_id=487095964')
            .then(res => res.json())
            .then(data => setDivisonData(data))
    }, [])

    // fetch district data from api
    useEffect(() => {
        fetch('https://engine.shikho.net/address?district_id=613581915')
            .then(res => res.json())
            .then(data => setDistrictData(data))
    }, [])

    const handleSubmit = () => {
        // Event.preventDefault();
    }
    const handleBackBtn = () => {
        setVisableOrNot({ right: '-9999px', transition: 'all 0.5s' })
    }

    // handle search input field
    const handleDivison = (e) => {
        setDivisonText(e.target.value);
        setShowSearchBox({ visibility: 'visible' })
    }

    const divisonSelect = e => {
        document.getElementById('searchAbleDropdown').value = e;
        setShowSearchBox({ visibility: 'hidden' })
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


                        <div className='mx-5 mt-5 relative'>
                            <label className='block' htmlFor="searchAbleDropdown">Divison</label>
                            <div >
                                <input onChange={handleDivison} className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500 focus:outline-b-white' id='searchAbleDropdown' name='searchAbleDropdown' type="text" placeholder='Type here' autoComplete='off' />
                                <span className='-ml-8'><i class="fas fa-search text-xl text-gray-400"></i></span>
                                <div style={{ ...showSearchBox, maxHeight: '200px', overflowY: 'scroll' }} className='absolute w-full bg-blue-100 shadow-2xl px-2 pb-4 border-b-2 rounded-b-lg'>
                                    {
                                        (divisonData.body) && divisonData.body.map(singleDivisonData => [singleDivisonData.display].filter(divisonName => divisonName.toLowerCase().includes(divisonText.toLowerCase())).map(sortedDivisonName => (
                                            <option key={i++} onClick={(e) => divisonSelect(e.target.innerText)} className='hover:bg-gray-100 cursor-pointer p-1' value={sortedDivisonName}>{sortedDivisonName}</option>
                                        )))
                                    }
                                </div>
                            </div>

                        </div>


                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="dropDown">District</label>
                            <input list="districtList" className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='dropDown' name='dropDown' type="text" placeholder='Type here' />
                            <span className='-ml-8'><i class="fas fa-chevron-circle-down text-xl text-gray-400"></i></span>
                            <datalist id='districtList'>
                                {/* <option value="hello 1"></option> */}
                                {
                                    (districtData.body) && districtData.body.map(singleDistrictData => [singleDistrictData.display].map(districtName => (
                                        <option value={districtName}></option>
                                    )))
                                }
                            </datalist>

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

                        <div>
                            <p className='mx-5 mt-10'>Packages</p>


                            <div className='mx-5 mt-2'>
                                <div className='flex justify-items-start'>
                                    <label className='flex w-full cursor-pointer' htmlFor="package1">
                                        <div style={{ height: '50px', width: '50px' }} className='bg-blue-200 rounded-md'></div>
                                        <div className='ml-5'>
                                            <p className='text-blue-500 font-bold'>Package 1</p>
                                            <p className='text-gray-800'>300 TK</p>
                                        </div>
                                    </label>
                                    <div style={{ height: '50px' }} className='flex-grow flex justify-end'>
                                        <input className='mt-5' type="checkbox" name="package1" id="package1" value='1' />
                                    </div>
                                </div>
                                {/*end 01 */}

                                <div className='flex justify-items-start mt-3'>
                                    <label className='flex w-full cursor-pointer' htmlFor="package2">
                                        <div style={{ height: '50px', width: '50px' }} className='bg-red-200 rounded-md'></div>
                                        <div className='ml-5'>
                                            <p className='text-red-300 font-bold'>Package 2</p>
                                            <p className='text-gray-800'>300 TK</p>
                                        </div>
                                    </label>
                                    <div style={{ height: '50px' }} className='flex-grow flex justify-end'>
                                        <input className='mt-5' type="checkbox" name="package2" id="package2" />
                                    </div>
                                </div>
                                {/* 02 */}

                                <div className='flex justify-items-start mt-3'>
                                    <label className='flex w-full cursor-pointer' htmlFor="package3">
                                        <div style={{ height: '50px', width: '50px' }} className='bg-green-200 rounded-md'></div>
                                        <div className='ml-5'>
                                            <p className='text-green-400 font-bold'>Package 3</p>
                                            <p className='text-gray-800'>300 TK</p>
                                        </div>
                                    </label>
                                    <div style={{ height: '50px' }} className='flex-grow flex justify-end'>
                                        <input className='mt-5' type="checkbox" name="package3" id="package3" />
                                    </div>
                                </div>
                                {/* 03 */}

                                <div className='flex justify-items-start mt-3'>
                                    <label className='flex w-full cursor-pointer' htmlFor="package4">
                                        <div style={{ height: '50px', width: '50px' }} className='bg-yellow-400 rounded-md'></div>
                                        <div className='ml-5'>
                                            <p className='text-yellow-600 font-bold'>Package 4</p>
                                            <p className='text-gray-800'>300 TK</p>
                                        </div>
                                    </label>
                                    <div style={{ height: '50px' }} className='flex-grow flex justify-end'>
                                        <input className='mt-5' type="checkbox" name="package4" id="package4" />
                                    </div>
                                </div>
                                {/* 04 */}
                            </div>


                        </div>

                    </div>
                    {/* end form content */}

                    <div className='flex justify-evenly bg-gray-200 py-2'>
                        <button>Cancel</button>
                        <button className='py-2 px-4 bg-blue-400 rounded-md text-white'>Submit</button>
                    </div>
                    {/* end form submit */}
                </form>
            </div >

        </aside >
    );
};

export default SideBar;