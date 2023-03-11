import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Content() {
  return (
    <div>
        <div className="w-full mt-[20px] inline-block">
            <Navbar />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-4 md:mx-auto mt-[50px]">
        <div>
          <h1 className="text-white text-[55px] font-bold">
            Pajak Penghasilan (PPh)
          </h1>
          <p className=" text-[#9999A1] text-[20px] py-5">
          Pajak Penghasilan (PPh) adalah pajak yang dikenakan atas penghasilan yang diperoleh oleh Wajib Pajak (WP) dari berbagai jenis sumber penghasilan, baik dari penghasilan dari usaha, kerja, modal, atau penghasilan lainnya. PPh dibayarkan ke negara melalui Direktorat Jenderal Pajak (DJP) sebagai badan pelaksana pengumpulan dan penagihan pajak.<br/><br/>
          Sebagaimana diketahui, pajak penghasilan (PPh) di Indonesia sudah mengalami perubahan sejak adanya UU HPP pada 1 Januari 2022. Pemerintah juga memberlakukan tarif PPh karyawan secara progresif. Artinya, makin besar penghasilan wajib pajak, pajak yang dikenakan bakal lebih besar. Tarif pajak baru dalam UU HPP yang mulai berlaku sejak awal tahun ini berubah dari empat menjadi lima layer. Berikut rinciannya:<br/><br/>
            <ul className="list-disc">
                <li>Penghasilan sampai dengan Rp 60 juta kena tarif PPh 5%</li>
                <li>Penghasilan di atas Rp 60 juta - Rp250 kena tarif PPh 15%</li>
                <li>Penghasilan di atas Rp 250 juta – Rp 500 juta dikenaikan tarif Pph 25%</li>
                <li>Penghasilan di atas Rp 500 juta – Rp 5 miliar dikenaikan tarif PPh 30%</li>
                <li>Penghasilan di atas Rp 5 miliar dikenakan tarif PPh 35%</li>
            </ul>

          </p>
        </div>
        <div className="my-5">
          <iframe
            className='ml-[40px] md:ml-[60px] max-w-[500px] w-[500px] h-[300px] static md:fixed'
            src="https://www.youtube.com/embed/UIp6_0kct_U"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
