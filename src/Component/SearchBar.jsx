import React from "react";
import { FaSearch } from 'react-icons/fa';
const SearchBar = () => {
    return (
        <div>
            <form className='flex justify-center m-auto' >
                <input type="text" placeholder='Search your product..' className='text-center sm:p-[0.5rem_1.5rem] md:w-[310px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg' />
                <button className='bg-blue-800 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg text-white text-xl'><FaSearch /></button>
            </form>
            
        </div>
    )
}

export default SearchBar