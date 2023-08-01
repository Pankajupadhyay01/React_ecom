import { React, useState } from 'react';
import { BiCartAlt } from 'react-icons/Bi'; 
import { GoPerson } from 'react-icons/Go';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [search, setsearch] = useState(false)
  return (
    <div>
      {/* upper Upper Text Started*/}
      <div className='flex justify-center bg-slate-50 text-md'>
        Set High Quality Product on 50% discount Price use <span className='mx-1 text-blue-900 font-bold'> Sup50Get</span>
      </div>
      {/* upper Upper Text Completed */}


      {/* Main Navbar */}
      <nav className='bg-white py-5'>
        <div className='flex justify-between items-center mx-5'>

          {/* Logo and Search bar  */}
          <div className='flex space-x-8 items-center'>
            <div className='text-4xl text-blue-800'>
              Lamda
            </div>
          </div>
          <div className='hidden md:flex'>
            <SearchBar />
          </div>

          {/* Links  */} 
          <ul className='flex justify-center items-center space-x-4'>
            <li className={`list-none text-3xl text-blue-800 md:hidden`} onClick={() => setsearch(!search)}><ion-icon name={search?"close-outline":"search-outline"}></ion-icon></li>
            <li className='list-none text-3xl text-blue-800'><BiCartAlt /></li>
            <li className='list-none text-3xl text-blue-800'><GoPerson /></li>
          </ul>

        </div>
        <div className={`${search?"flex":"hidden"} justify-center md:hidden`}>
          <SearchBar />
        </div>

      </nav>
      {/* Main Navbar Ended*/}

    </div>
  )
}

export default Navbar