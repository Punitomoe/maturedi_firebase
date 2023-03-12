import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from '../assets/Design/logo.png'
import account from '../assets/Icon/user.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-[#252529] flex justify-between items-center h-[50px] sm:h-[70px] max-w-[1240px] mx-auto px-4 text-white font-semibold rounded-full'>
      <Link to='/dashboard'><img src={logo} className='w-auto h-[32px] ml-[20px] -mt-[5px] cursor-pointer' /></Link>
      <ul className='hidden md:flex cursor-pointer'>
        <Link to="/dashboard"><li className='p-4 mx-4 text-white hover:text-[#00df9a]'>Beranda</li></Link>
        <Link to="/menu"><li className='p-4 mx-4 text-white hover:text-[#00df9a]'>Menu </li></Link>
        <Link to="/kalkulator"><li className='p-4 mx-4 text-white hover:text-[#00df9a]'>Kalkulator </li></Link>
        <Link to="/login"><li className='p-4 mx-4 text-white hover:text-[#00df9a]'>Login </li></Link>
        <img src={account} className='w-[45px] h-[45px] rounded-full m-2'/>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 z-20 w-[60%] h-full border-r border-r-gray-900 bg-[#202022] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img src={logo} className='w-auto h-[32px] m-4 cursor-pointer' />
          <li className='p-4 border-b border-gray-600'><Link to="/dashboard">Beranda </Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/menu">Menu </Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/kalkulator">Kalkulator </Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/login"> </Link>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;