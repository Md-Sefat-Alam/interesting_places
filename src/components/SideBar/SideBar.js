import React, { useState, useEffect } from 'react';
import './SideBar.css'

const SideBar = ({ visableOrNot, setVisableOrNot, getDataFromLocalStorage }) => {
    const [divisonData, setDivisonData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [divisonSelectedCode, setDivisonSelectedCode] = useState(0)


    const [divisonText, setDivisonText] = useState('');
    const [districtSelected, setDistrictSelected] = useState('');
    const [showSearchBox, setShowSearchBox] = useState({ visibility: 'hidden' });
    const [popularPlaceCount, setPopularPlaceCount] = useState([])
    const [divisonCloseBtnCtrl, setDivisonCloseBtnCtrl] = useState({ display: 'none' });

    // fetch divison data from api
    useEffect(() => {
        fetch('https://engine.shikho.net/address?division_id=487095964')
            .then(res => res.json())
            .then(data => setDivisonData(data))
    }, [])

    // fetch district data from api
    useEffect(() => {
        if (divisonSelectedCode !== 0) {
            const url = `https://engine.shikho.net/address?district_id=${divisonSelectedCode}`
            fetch(url)
                .then(res => res.json())
                .then(data => setDistrictData(data))
        } else {
            setDistrictData([])
        }
    }, [divisonSelectedCode])


    const handleBackBtn = () => {
        setVisableOrNot({ right: '-9999px', transition: 'all 0.5s' })
    }

    // handle search input field
    const handleDivison = (e) => {
        setDivisonText(e.target.value);
        setShowSearchBox({ visibility: 'visible' });
        if (e.target.value) {
            setDivisonCloseBtnCtrl({ display: 'inline' });
        } else {
            setDivisonCloseBtnCtrl({ display: 'none' });
            setShowSearchBox({ visibility: 'hidden' });
        }
    }
    const divisonCloseBtn = () => {
        document.getElementById('searchAbleDropdown').value = '';
        setDivisonSelectedCode(0);
        setShowSearchBox({ visibility: 'hidden' });
        setDivisonCloseBtnCtrl({ display: 'none' });
    }

    const divisonSelect = (e, _code) => {
        document.getElementById('searchAbleDropdown').value = e;
        setDivisonText(e);
        setDivisonSelectedCode(_code);
        setShowSearchBox({ visibility: 'hidden' });
    }
    // find all option for remove from old district list
    const removeList = () => {
        const optionElements = document.getElementsByClassName('districtOptionListData');
        [optionElements].map(e => {
            e.innerHTML = <></>
        })
        console.log(optionElements);
    }

    // add popular place
    const addPopularPlace = () => {
        // generate key
        const keyData = Math.round(Math.random() * 5000);
        const keyDataUnique = popularPlaceCount.filter(data => keyData === data);
        if (keyDataUnique.length > 0) {
        } else {
            setPopularPlaceCount([...popularPlaceCount, keyData]);
        }
    }

    // district data control
    const districtSelect = e => {
        setDistrictSelected(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let popularPlaces = [];
        const inputFields = document.getElementsByClassName('popularplacesInputField');
        for (const iterator of inputFields) {
            popularPlaces.push(iterator.value);
        }

        let packagesSelected = [];
        (document.getElementById('package1').checked) && packagesSelected.push({ id: 1, name: 'Package 1', price: '300', packInfo: [] });
        (document.getElementById('package2').checked) && packagesSelected.push({ id: 2, name: 'Package 2', price: '300', packInfo: [] });
        (document.getElementById('package3').checked) && packagesSelected.push({ id: 3, name: 'Package 3', price: '300', packInfo: [] });
        (document.getElementById('package4').checked) && packagesSelected.push({ id: 4, name: 'Package 4', price: '300', packInfo: [] });

        let placeImage = document.getElementById('placeImage').value;

        const submitInfo = {
            divison: divisonText,
            district: districtSelected,
            popularPlaces: popularPlaces,
            pakages: packagesSelected,
            img: placeImage
        }
        console.log(submitInfo);
        const exists = localStorage.getItem('popular_places_data');
        if (!exists) {
            localStorage.setItem("popular_places_data", JSON.stringify([{ ...submitInfo, _key: 1 }]));
        } else {
            let oldPlacesData = JSON.parse(exists);
            const _key = oldPlacesData.length + 1;
            oldPlacesData.push({ ...submitInfo, _key: _key });
            localStorage.setItem('popular_places_data', JSON.stringify(oldPlacesData));
        }

        // reset all data
        packagesSelected = [];
        popularPlaces = [];
        placeImage = '';
        setDivisonText('');
        setDistrictSelected("");
        document.addPopularPlaceForm.reset();
        setDivisonSelectedCode(0);
        removeList()
        setTimeout(() => {
            handleBackBtn();
        }, 700);
        alert('added')
        getDataFromLocalStorage()
    }



    return (
        <aside style={visableOrNot} className='sideBar shadow-2xl w-full sm:w-full md:w-1/2 xl:w-1/3 fixed border-l-2 '>
            <div className='h-16'>
            </div>

            <div>
                <button onClick={handleBackBtn} className='bg-red-600 px-3 py-2 rounded-md text-white ml-10'>&#8592; Back</button>
            </div>
            <div>
                <form onSubmit={handleSubmit} name='addPopularPlaceForm'>
                    <div className='formContentWrapper pb-5'>


                        <div className='mx-5 mt-5 relative'>
                            <label className='block' htmlFor="searchAbleDropdown">Divison</label>
                            <div >
                                <input required onChange={handleDivison} className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500 focus:outline-b-white' id='searchAbleDropdown' name='searchAbleDropdown' type="text" placeholder='Type here' autoComplete='off' />
                                <span className='-ml-8'><i class="fas fa-search text-xl text-gray-300"></i></span>
                                <span style={divisonCloseBtnCtrl} className='-ml-12'><i onClick={divisonCloseBtn} class="fas fa-times text-2xl text-gray-400 cursor-pointer hover:text-red-600"></i></span>
                                <div style={{ ...showSearchBox, maxHeight: '200px', overflowY: 'scroll' }} className='absolute w-full bg-blue-100 shadow-2xl px-2 pb-4 border-b-2 rounded-b-lg'>
                                    {
                                        (divisonData.body) && divisonData.body.map(singleDivisonData => [singleDivisonData.display].filter(divisonName => divisonName.toLowerCase().includes(divisonText.toLowerCase())).map(sortedDivisonName => (
                                            <option key={singleDivisonData.code} onClick={(e) => {
                                                e.stopPropagation();
                                                removeList();
                                                divisonSelect(e.target.innerText, singleDivisonData.code)
                                            }} className='hover:bg-gray-100 cursor-pointer p-1' value={sortedDivisonName}>{sortedDivisonName}</option>
                                        )))
                                    }
                                </div>
                            </div>

                        </div>


                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="dropDown">District</label>
                            <select onBlur={districtSelect} required name="dropDown" id="dropDown" className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500'>
                                <option value={'select'}>Select....</option>
                                {
                                    (districtData.body) ? districtData.body.map(singleDistrictData => [singleDistrictData.display].map(districtName => (
                                        <>
                                            <option className='districtOptionListData' value={districtName}>{districtName}</option>
                                        </>
                                    )))
                                        :
                                        <></>
                                }
                            </select>
                            {/* <input required onBlur={districtSelect} list="districtList" className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='dropDown' name='dropDown' type="text" placeholder='Type here' />

                            <span className='-ml-8'><i class="fas fa-chevron-circle-down text-xl text-gray-400"></i></span>
                            <datalist id='districtList'>
                            {
                                (districtData.body) && districtData.body.map(singleDistrictData => [singleDistrictData.display].map(districtName => (
                                    <option value={districtName}></option>
                                )))
                            }
                        </datalist> */}
                        </div>


                        <div className='mx-5 mt-5'>
                            <label className='block' htmlFor="placeImage">An Ineresting Image</label>
                            <input required className='w-full border-2 rounded-md py-2 px-3 bg-blue-200/50 focus:outline-blue-500' id='placeImage' name='placeImage' type="url" placeholder='Image Link Here' />

                            <span className='-ml-8'><i class="fas fa-image text-xl text-gray-300"></i></span>
                        </div>


                        <div className='mx-5 mt-5'>
                            <div id="popularPlaces">
                                <div>
                                    <label className='block' htmlFor="popularPlace">Popular Place</label>
                                    <input required className='popularplacesInputField w-3/4 rounded-md py-2 px-3 border-2 focus:outline-blue-500' id='popularPlace' name='popularPlace' type="text" placeholder={'Popular place name here'} />
                                    <div className='inline-block w-1/4 cursor-pointer select-none'>
                                        <div className='w-full flex justify-center align-middle'>
                                            {/* <div className='bg-gray-400 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center'>
                                            <i class="fas fa-minus text-xl text-gray-100 mt-2"></i>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* 1 */}
                                {
                                    popularPlaceCount.map(_key => {
                                        return (
                                            <div key={_key} className='mt-2'>
                                                <input required className='popularplacesInputField w-3/4 rounded-md py-2 px-3 border-2 focus:outline-blue-500 ' id='popularPlace' name='popularPlace' type="text" placeholder={'Popular place name here'} />
                                                <div className='inline-block w-1/4 cursor-pointer select-none'>
                                                    <div className='w-full flex justify-center align-middle'>
                                                        <div onClick={(e) => {
                                                            const placeParentNode = e.target.parentNode.parentNode.parentNode.parentNode;
                                                            placeParentNode.remove();

                                                        }} className='bg-gray-400 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center'>
                                                            <i class="fas fa-minus text-xl text-gray-100 h-full w-full text-center pt-2 rounded-full"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {/* dynamically add */}
                            </div>
                            <div className='mt-2'>
                                <div onClick={addPopularPlace} className='w-3/4 rounded-md py-2 px-3  border-2 border-dashed border-gray-500 text-center cursor-pointer select-none'>
                                    <span className='text-blue-500'>+ add a place</span>
                                </div>
                                {/* onClick={() => { Event.preventDefault() }} */}

                            </div>
                            {/* add popular place btn */}

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
                        <button onClick={(e) => {
                            e.preventDefault();
                            setDivisonSelectedCode(0);
                            removeList();
                            document.addPopularPlaceForm.reset();
                            setTimeout(() => {
                                handleBackBtn();
                            }, 700);
                        }}>Cancel</button>
                        {/* <button className='py-2 px-4 bg-blue-400 rounded-md text-white'>Submit</button> */}
                        <input className='py-2 px-4 bg-blue-400 rounded-md text-white cursor-pointer' type="submit" value="Submit" />
                    </div>
                    {/* end form submit */}
                </form>
            </div >

        </aside >
    );
};

export default SideBar;