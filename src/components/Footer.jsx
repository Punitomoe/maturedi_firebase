import React from 'react';
import logo from '../assets/Design/logo.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src={logo} className='w-auto h-[25px] cursor-pointer' />
        <p className='py-4'>© 2023 Maturedi. All rights reserved.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>About Us</h6>
        <ul>
            <li className='py-3 text-sm'>Me</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Asuransi</h6>
        <ul>
            <li className='py-3  text-sm'>Ketenagakerjaan</li>
            <li className='py-3  text-sm'>Kesehatan</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal Dokumen</h6>
        <ul>
            <li className='py-3  text-sm'>KTP</li>
            <li className='py-3  text-sm'>SIM</li>
            <li className='py-3  text-sm'>SKCK</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Perpajakan</h6>
        <ul>
            <li className='py-3  text-sm'>Karyawan</li>
            <li className='py-3  text-sm'>Kendaraan</li>
            <li className='py-3  text-sm'>UMKM</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;