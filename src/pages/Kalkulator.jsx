import React from "react";
import headerBackground from "../assets/Design/kalkulator.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import avatar from "../assets/Icon/avatar.png";
import store from "../assets/Icon/store.png";
import motorbike from "../assets/Icon/motorbike.png";

export default function Dashboard() {
  return (
    <div>
      <div className="relative">
        <div className="w-full mt-[20px] absolute inline-block">
          <Navbar />
        </div>
        <img src={headerBackground} className="bg-cover w-full h-[600px]" />
        <div className="absolute inline-block bottom-0 left-0 z-10 max-w-[1240px] text-left mx-[20px] md:mx-[90px] sm:mx-[180px] mb-[20px] sm:mb-[50px] cursor-default">
          <h1 className="text-[#FFFFFF] font-bold text-[30px] sm:text-[64px]">
            Temukan dan atur masalah keuangan
            <a className="text-[#3CC602]">keuangan</a> Anda sendiri di sini!{" "}
          </h1>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

        {/* PAJAK KARYAWAN */}
        <div className="w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-3 stroke-[#272728] shadow-xl flex flex-col p-4 my-4 rounded-tl-[40px] rounded-br-[40px] hover:scale-105 duration-300">
          <img className="w-[150px] mx-auto mt-[2rem]" src={avatar} alt="/" />
          <h2 className="text-[40px] font-bold text-center py-8 text-white cursor-default">
            Pajak Karyawan
          </h2>
          <form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B]">
            <div className="flex flex-col text-gray-400 py-2">
              <label>Penghasilan dalam setahun :</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Bonus THR dan sebagainya :</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Status perkawinan / tanggungan :</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              TOTAL
            </button>
          </form>
          <div className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B] flex flex-col text-gray-400 py-2">
          <label>Jumlah kisaran pajak yang harus dibayar :</label>
            <div className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none">
                Rp.
            </div>
          </div>
        </div>
       
       {/* PAJAK UMKM */}
        <div className="w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-[#272728] shadow-xl flex flex-col p-4 my-4 rounded-tl-[40px] rounded-br-[40px] hover:scale-105 duration-300">
          <img className="w-[150px] mx-auto mt-[2rem]" src={store} alt="/" />
          <h2 className="text-[40px] font-bold text-center py-8 text-white cursor-default">
            Pajak UMKM
          </h2>
          <form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B]">
            <div className="flex flex-col text-gray-400 py-2">
              <label>Omzen dalam setahun :</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              TOTAL
            </button>
          </form>
          <div className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B] flex flex-col text-gray-400 py-2">
          <label>Jumlah kisaran pajak yang harus dibayar :</label>
            <div className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none">
                Rp.
            </div>
          </div>
        </div>
        
        {/* PAJAK KENDARAAN*/}
        <div className="w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-[#272728] shadow-xl flex flex-col p-4 my-4 rounded-tl-[40px] rounded-br-[40px] hover:scale-105 duration-300">
          <img className="w-[150px] mx-auto mt-[2rem]" src={motorbike} alt="/" />
          <h2 className="text-[40px] font-bold text-center py-8 text-white cursor-default">
            Pajak Kendaraan
          </h2>
          <form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B]">
            <div className="flex flex-col text-gray-400 py-2">
              <label>Pajak kendaraan cenderung memiliki nilai pasti yang tidak terpengaruh pada besaran pendapatan pengguna dan sudah ditentukan oleh pihak samsat.</label>
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              TOTAL
            </button>
          </form>
        </div>

      </div>
      <Cards />
      <Footer />
    </div>
  );
}
