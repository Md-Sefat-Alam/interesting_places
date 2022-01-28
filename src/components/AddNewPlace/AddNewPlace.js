import React from 'react';
import "./AddNewPlace.css"

const AddNewPlace = ({ setVisableOrNot }) => {
    const handleAddButton = () => {
        setVisableOrNot({ right: "0", transition: 'all 0.3s' });
    }
    return (
        <div className='flex flex-col sm:flex-row sm:justify-between border-none p-12 bg-zinc-200/80 rounded-md mx-1 sm:mx-4'>
            <div>
                <h1 className='font-bold text-4xl text-slate-700'>Want to add a new Place?</h1>
            </div>
            <div>
                <button onClick={handleAddButton} className='hover:bg-blue-600 transition-colors border-none text-white bg-blue-500 p-4 mt-5 sm:mt-0 w-full rounded-2xl'>+ Add New Place</button>
            </div>
        </div>
    );
};

export default AddNewPlace;