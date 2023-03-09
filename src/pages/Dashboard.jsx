import React from "react";
import headerBackground from "../assets/Design/dashboard.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Dev from "../assets/Design/Dev.png"

export default function Dashboard() {
  return (
    <div>
      <div className="relative">
        <div className="w-full mt-[20px] absolute inline-block">
            <Navbar />
        </div>
        <img src={headerBackground} className="bg-cover w-full h-[600px]" />
        <div className="absolute inline-block bottom-0 left-0 z-10 px-[0px] md:px-[350px] sm:px-[350px] text-left mx-[20px] md:mx-[90px] sm:mx-[180px] mb-[20px] sm:mb-[50px] cursor-default ">
            <h2 className="text-[#FFFFFF] font-bold text-[24px] sm:text-[58px]">Halo Sobat !</h2>
            <h1 className="text-[#FFFFFF] font-bold text-[30px] sm:text-[64px]">Makin Ready dengan <a className="text-[#C60202]">Maturedi!</a></h1>
            <h3 className="text-[#9999A1] text-[16px] sm:text-[24px]">Paham masalah perpajakan, asuransi, sampai mengurusi legal dokumen ga pakai ribet di meturedi. Segera temukan jawaban atas pertanyaan Anda dan selalu terupdate dengan informasi terkini di website kami.</h3>
        </div>
      </div>
      <div>
        <img src={Dev} className="mx-auto max-w-500 mt-[45px]"/>
        </div>
      <Cards />
      <Footer />
    </div>
  );
}
