import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/Design/logo.png'
import account from '../assets/Icon/user.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-[#252529] flex justify-between items-center h-[50px] sm:h-[70px]  max-w-[1240px] mx-auto px-4 text-white font-semibold rounded-full'>
      <img src={logo} className='w-auto h-[32px] ml-[20px] -mt-[5px] cursor-pointer' />
      <ul className='hidden md:flex cursor-pointer'>
        <li className='p-4'>Beranda</li>
        <li className='p-4'>Menu</li>
        <li className='p-4'>Kalkulator</li>
        <li className='p-4'>Login</li>
        <img src={account} className='w-[45px] h-[45px] rounded-full m-2'/>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 z-20 w-[60%] h-full border-r border-r-gray-900 bg-[#202022] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img src={logo} className='w-auto h-[32px] m-4 cursor-pointer' />
          <li className='p-4 border-b border-gray-600'>Beranda</li>
          <li className='p-4 border-b border-gray-600'>Menu</li>
          <li className='p-4 border-b border-gray-600'>Kalkulator</li>
          <li className='p-4 border-b border-gray-600'>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;