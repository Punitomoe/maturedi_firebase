import React from "react";
import account from "../assets/Icon/user.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Ktp() {
  return (
    <div>
      <div className="w-full mt-[20px] inline-block">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1700px] mx-4 md:mx-auto mt-[50px]">
        <div>
          <h1 className="text-white text-[55px] font-bold">
            PERSYARATAN PEMBUATAN KTP
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Setiap Penduduk yang telah berusia 17 tahun atau sudah kawin atau
            pernah kawin berhak memiliki KTP <br />
            Setiap Penduduk hanya diperbolehkan memiliki 1 (satu) KTP
            <br />
            <br />
            Ketentuan pembuatan KTP Baru :
            <br />
            <br />
            <ul className="list-disc">
              <li>Surat Pengantar dari Desa/Kelurahan</li>
              <li>Fotocopy KK</li>
              <li>Datang Langsung untuk di Foto</li>
            </ul>
          </p>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Permohonan KTP Pengganti karena Hilang atau Rusak :
            <br />
            <br />
            <ul className="list-disc">
              <li>Surat Pengantar dari Desa/Kelurahan Fotocopy KK</li>
              <li>
                Menyerahkan Surat Keterangan kehilangan dari Kepolisian (bagi
                KTP Hilang) atau
              </li>
              <li>Menyerahkan bukti KTP yang rusak</li>
              <li>Datang langsung untuk diproses</li>
            </ul>
          </p>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Permohonan Pembetulan Data KTP :
            <br />
            <br />
            <ul className="list-disc">
              <li>Surat Pengatar dari Desa/Kelurahan</li>
              <li>Fotocopy KK</li>
              <li>
                Fotocopy Bukti pendukung sesuai dengan permohonan data
                pemebtulan dalam KK
              </li>
              <li>Datang langsung untuk diproses</li>
            </ul>
          </p>
        </div>
        <div className="my-5 mx-5">
          <iframe
            className="mx-auto md:ml-[40px] max-w-[500px] w-auto md:w-[500px] h-auto md:h-[300px] static"
            src="https://www.youtube.com/embed/hSTR9hw9doE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div flex flex-row float-right>
            <div>
              <img
                src={account}
                className="w-[45px] h-[45px] rounded-full m-2"
              />
            </div>
            <div>
              <textarea
                name="comment"
                placeholder="Tambahkan komentar Anda..."
                className="max-w-[600px] h-auto w-full sm:items-center sm:content-start sm:justify-item-center border-4 border-[#272728] shadow-xl p-4 md:my-0 my-8 rounded-lg scale-100 hover:scale-110 duration-300"
              ></textarea>
            </div>
            <div>
              <button className="shadow-lg bg-[#00df9a] hover:bg-[#3cc602] ease-in-out duration-500 w-auto rounded-md text-[18px] font-semibold my-6 mx-auto px-6 py-2 hover:text-white">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
