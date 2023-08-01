import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import nav from '../data/nav';
import { BiCartAlt } from 'react-icons/Bi';
import { FaSearch } from 'react-icons/fa';
import { GoPerson } from 'react-icons/Go';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [search, setsearch] = useState(false)
  console.log(search);
  return (
    <div>
      {/* upper Navbar Started*/}
      <nav className='bg-white my-1'>
        <div className='flex justify-center items-center mx-5'>
          <ul className='flex'>
            {
              nav.map((obj, i) => (
                <li key={i} className='mx-2 text-gray-400 hover:text-black'>
                  <Link to={obj.link}>
                    {obj.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
      {/* upper Navbar Completed */}


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
          <div className='flex justify-center items-center space-x-4'>
            <li className={`list-none text-3xl text-blue-800 md:hidden`} onClick={() => setsearch(!search)}><ion-icon name={search?"close-outline":"search-outline"}></ion-icon></li>
            <li className='list-none text-3xl text-blue-800'><BiCartAlt /></li>
            <li className='list-none text-3xl text-blue-800'><GoPerson /></li>
          </div>

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