import React, { useState } from 'react';

const Section1 = () => {

    const [searchQuery, setSearchQuery] = useState('');


    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const query = formData.get('search');
        if (query.trim()) {
            setSearchQuery(query.trim());
        }
    };


    return (

        <div className='h-screen flex flex-col justify-center items-center bg-[#F4F1E6] gap-5 '>
            <h1 className='font-bold text-5xl text-[#213448] w-150 text-center'>Your Gateway To Literary Explorations and Knowledge</h1>

            <form onSubmit={handleSearch} className="mb-8 flex gap-4 justify-center">
                <input
                    name="search"
                    type="text"
                    placeholder="Search for books... "
                    className="px-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:border-[#537D5D]"
                />
                <button
                    type="submit"
                    className="bg-[#537D5D] text-white px-6 py-2 rounded-lg hover:bg-[#73946B] transition-colors"
                >
                    Search Books
                </button>
            </form>

        </div>
    );
};

export default Section1;