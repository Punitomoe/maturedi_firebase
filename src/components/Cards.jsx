import React from 'react';
import Asuransi from '../assets/Icon/asuransi.png'
import Legal from '../assets/Icon/file.png'
import Pajak from '../assets/Icon/tax.png'

const Cards = () => {
  return (
    <div className='w-full py-[1rem] px-4'>
        <div className='row-2 max-w-full text-right mx-[5px] md:mx-[90px] sm:mx-[180px] mb-[20px] sm:mb-[50px] px-[0px] md:px-[350px] sm:px-[350px]'>
            <h1 className='text-[#FFFFFF] font-bold text-[30px] md:text-[64px] '>Temukan informasi terkini dan terpercaya di <a className='text-[#3CC602]'>website</a> kami!</h1>
            <h3 className='text-[#9999A1] text-[16px] sm:text-[24px] '>Segera temukan jawaban atas pertanyaan Anda di sini</h3>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='max-w-[400px] w-full mx-auto bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 my-4 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
              <img className='w-[150px] mx-auto mt-[2rem]' src={Asuransi} alt="/" />
              <h2 className='text-[40px] font-bold text-center py-8 text-white cursor-default'>Asuransi</h2>
              <p className='w-[280px] md:w-auto h-[100px] md:h-auto md:ml-2 text-left text-lg text-[#9999A1] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
              <button className='bg-[#00df9a] w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3'>Baca Selengkapnya</button>
          </div>
          <div className='max-w-[400px] w-full mx-auto bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] hover:scale-110 duration-300'>
              <img className='w-[150px] mx-auto mt-[2rem]' src={Legal} alt="/" />
              <h2 className='text-[40px] font-bold text-center py-8 text-white cursor-default'>Legal Dokumen</h2>
              <p className='w-[280px] md:w-auto h-[100px] md:h-auto md:ml-2 text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
              <button className='bg-[#00df9a] w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3'>Baca Selengkapnya</button>
          </div>
          <div className='max-w-[400px] w-full mx-auto bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-[#272728] shadow-xl flex flex-col p-4 my-4 rounded-tl-[40px] rounded-br-[40px] hover:scale-110 duration-300'>
              <img className='w-[150px] mx-auto mt-[2rem]' src={Pajak} alt="/" />
              <h2 className='text-[40px] font-bold text-center py-8 text-white cursor-default'>Perpajakan</h2>
              <p className='w-[280px] md:w-auto h-[100px] md:h-auto md:ml-2 text-left text-lg text-[#9999A1] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
              <button className='bg-[#00df9a] w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3'>Baca Selengkapnya</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;