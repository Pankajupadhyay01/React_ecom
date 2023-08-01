import { useState } from 'react';
import { Link } from 'react-router-dom'; 
const Search = () => {   

    
 
    return (
        <div>
            <form  className='flex justify-center m-auto' >
                <input type="text" placeholder='Search your product..' className='sm:p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg' />
                <Link type='submit' href="" className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'>Search</Link>
            </form>
        </div>
    );
}

export default Search;
