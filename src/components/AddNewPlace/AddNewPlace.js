import React from 'react';
import "./AddNewPlace.css"

const AddNewPlace = () => {
    return (
        <div className='flex justify-between border-none p-12 bg-zinc-200/50 rounded-md'>
            <div>
                <h1 className='font-bold text-4xl text-slate-700'>Want to add a new Place?</h1>
            </div>
            <div>
                <button className='hover:bg-blue-600 transition-colors border-none text-white bg-blue-500 p-5 rounded-2xl'>+ Add New Place</button>
            </div>
        </div>
    );
};

export default AddNewPlace;