import React from "react";
import headerBackground from "../assets/Design/menu.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import avatar from "../assets/Icon/avatar.png";
import store from "../assets/Icon/store.png";
import motorbike from "../assets/Icon/motorbike.png";
import card from "../assets/Icon/card.png";
import polisi from "../assets/Icon/polisi.png";
import engineer from "../assets/Icon/engineer.png";
import heart from "../assets/Icon/heart.png";
import ktp from "../assets/Icon/ktp.png";

export default function Menu() {
  return (
    <div>
      <div className="relative">
        <div className="w-full mt-[20px] absolute inline-block">
            <Navbar />
        </div>
        <img src={headerBackground} className="bg-cover w-full h-[600px]" />
        <div className="absolute inline-block bottom-0 left-0 z-10 px-[0px] md:px-[350px] sm:px-[350px] text-left mx-[20px] md:mx-[90px] sm:mx-[180px] mb-[20px] sm:mb-[50px] cursor-default ">
            <h1 className="text-[#FFFFFF] font-bold text-[30px] sm:text-[64px]">Mulailah <a className="text-[#C60202]">penjelajahan!</a> Anda untuk menemukan pengetahuan baru</h1>
        </div>
      </div>
      <div>
        <div className='flex md:flex-col flex-wrap mx-auto md:mx-10 mt-3'>
              <div className=' w-full mx-auto bg-none sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-row flex-wrap p-4 my-4 rounded-tl-[40px] rounded-br-[40px] duration-300'>
                <h2 className='w-[200px] text-[40px] font-bold text-center py-8 text-white cursor-default mx-auto sm:mx-4'>Asuransi</h2>
                <div className="flex flex-wrap">
                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={engineer} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>BPJS Ketenagakerjaan</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>

                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={heart} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>BPJS Kesehatan</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>
                </div>
            </div>

            <div className=' w-full mx-auto bg-none sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-row flex-wrap p-4 my-4 rounded-tl-[40px] rounded-br-[40px] duration-300'>
                <h2 className='w-[200px] text-[40px] font-bold text-center py-8 text-white cursor-default mx-auto'>Legal Dokumen</h2>
              <div className="flex flex-wrap">
                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={ktp} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>Kartu Tanda Pengenal</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>

                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={card} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>Surat Izin Mengemudi</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>

                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={polisi} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>Surat Keterangan Catatan Kepolisian</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>
                </div>
            </div>

            <div className=' w-full mx-auto bg-none sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-row flex-wrap p-4 my-4 rounded-tl-[40px] rounded-br-[40px] duration-300'>
                <h2 className='w-[200px] text-[40px] font-bold text-center py-8 text-white cursor-default mx-auto'>Perpajakan</h2>
                <div className="flex flex-wrap">
                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={avatar} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>Pajak Penghasilan</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>

                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={store} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>Pajam UMKM</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>

                <div className='max-w-[550px] mx-5 h-[400px] w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-tl-[40px] rounded-br-[40px] scale-100 hover:scale-110 duration-300'>
                  <img className='w-[50px] mx-auto mt-[1rem]' src={motorbike} alt="/" />
                  <h2 className='text-[30px] font-bold text-center py-8 text-[#F4F4F5] cursor-default'>Pajak Kendaraan</h2>
                  <p className='w-[280px] md:w-auto h-[100px] md:h-auto mx-auto text-left text-lg text-[#9999A1] mb-[25px] cursor-default'>Informasi seputar asuransi ketenagakerjaan dan kesehatan, banyak hal yang dapat diketahui ...</p>
                  <button className='shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-3 hover:text-white'>Baca Selengkapnya</button>
                </div>
                </div>
            </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
