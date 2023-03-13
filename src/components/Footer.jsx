import React from 'react';
import logo from '../assets/Design/logo.png'
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src={logo} className='w-auto h-[25px]  cursor-default' />
        <p className='py-4 cursor-default'>© 2023 Maturedi. All rights reserved.</p>
        <div className='flex justify-between md:w-[75%] my-6 cursor-pointer'>
        <a href="https://www.instagram.com/moskujh_/?hl=id" target="_blank" rel="noreferrer"><FaInstagram size={30}  /></a>
        <a href="https://www.linkedin.com/in/dimas-julio-cessar-b66424222" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
        <a href="https://github.com/Punitomoe" target="_blank" rel="noreferrer"><FaGithubSquare size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>About Us</h6>
        <ul>
            <li className='py-3 text-sm hover:text-[#00df9a] cursor-pointer'><Link to='/about'>Me</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Asuransi</h6>
        <ul>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/ketenagakerjaan">Ketenagakerjaan</Link></li>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/kesehatan">Kesehatan</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal Dokumen</h6>
        <ul>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/ktp">KTP</Link></li>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/sim">SIM</Link></li>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/skck">SKCK</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Perpajakan</h6>
        <ul>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/penghasilan">Penghasilan</Link></li>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/kendaraan">Kendaraan</Link></li>
            <li className='py-3  text-sm hover:text-[#00df9a] cursor-pointer'><Link to="/umkm">UMKM</Link></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;