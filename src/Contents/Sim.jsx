import React from "react";
import account from "../assets/Icon/user.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import gambar from "../assets/Design/sim.jpg";

export default function Sim() {
  return (
    <div>
      <div className="w-full mt-[20px] inline-block">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1700px] mx-4 md:mx-auto mt-[50px]">
        <div>
          <h1 className="text-white text-[55px] font-bold">
            Cara Bikin SIM Online 2023, Berikut Syarat, Biaya, dan Prosedurnya
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            (SIM) adalah bukti registrasi dan identifikasi yang diberikan oleh
            Polri kepada seseorang sebagai izin untuk mengendarai kendaraan
            bermotor. Bagi masyarakat yang sudah memenuhi persyaratan usia,
            administrasi, dan kesehatan, dapat langsung mengunjungi kantor
            Satuan Penyelenggara Administrasi SIM (Satpas) terdekat. Namun, saat
            ini masyarakat juga dapat melakukan pendaftaran SIM secara online
            melalui aplikasi Digital Korlantas Polri. Melalui aplikasi tersebut,
            pendaftar dapat melakukan ujian teori SIM di rumah. Tapi, untuk
            melakukan ujian praktik masih harus datang langsung ke Satpas.
            <br />
            <br />
          </p>
          <h1 className="text-white text-[35px] font-bold">
          Syarat bikin SIM online 2023
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
          Ada empat persyaratan untuk dapat memiliki SIM, yakni usia, administrasi, kesehatan, dan lulus ujian.
          </p>
          <h1 className="text-white text-[20px] font-bold">
            1. Usia
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            <ul className="list-disc">
              <li>
              SIM A, SIM C, SIM D, dan SIM D1 minimal sudah berusia 17 tahun
              </li>
              <li>
              SIM C1 minimal berusia 18 tahun
              </li>
              <li>
              SIM C2 minimal berusia 19 tahun
              </li>
              <li>
              SIM A dan SIM B1 minimal berusia 20 tahun
              </li>
              <li>
              SIM B2 minimal berusia 21 tahun
              </li>
              <li>
              SIM B1 Umum minimal berusia 22 tahun
              </li>
              <li>
              SIM B2 Umum minimal berusia 23 tahun
              </li>
            </ul>
          </p>
          <img src={gambar} className="my-4" />
          <h1 className="text-white text-[20px] font-bold">
            2. Administrasi
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            <ul className="list-disc">
              <li>
              Mengisi dan menyerahkan formulir pendaftaran SIM secara manual atau menunjukkan tanda bukti pendaftaran elektronik
              </li>
              <li>
              Kartu Tanda Penduduk elektronik (E-KTP) atau dokumen keimigrasian, asli dan fotokopi
              </li>
              <li>
              Fotokopi sertifikat pendidikan dan pelatihan mengemudi yang asli, paling lambat 6 bulan sejak diterbitkan
              </li>
              <li>
              Fotokopi surat izin kerja asli dari kementerian yang membidangi ketenagakerjaan bagi warga negara asing (WNA) yang bekerja di Indonesia
              </li>
              <li>
              Melaksanakan perekaman biometrik berupa sidik jari dan pengenalan wajah maupun retina mata
              </li>
              <li>
              Menyerahkan bukti pembayaran penerimaan negara bukan pajak.
              </li>
            </ul>
          </p>
          <h1 className="text-white text-[20px] font-bold">
            3. Kesehatan
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
          Bagi masyarakat yang mendaftar SIM 2023, perlu melakukan pemeriksaan kesehatan jasmani atau fisik. Selain itu, akan ada pemeriksaan kesehatan rohani berupa kemampuan kognitif, kemampuan psikomotorik dan kepribadian.
            <br />
          </p>
          <h1 className="text-white text-[20px] font-bold">
            4. Lulus Ujian
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
          Persyaratan terakhir untuk mendapatkan SIM adalah lulus di sejumlah tes yang diujikan. Ujian tersebut meliputi:
            <ul className="list-disc">
              <li>
              Ujian teori
              </li>
              <li>
              Ujian keterampilan melalui simulator
              </li>
              <li>
              Ujian praktek
              </li>
            </ul>
          </p>
        </div>
        <div className="my-5 mx-5">
          <iframe
            className="mx-auto md:ml-[40px] max-w-[500px] w-auto md:w-[500px] h-auto md:h-[300px] static"
            src="https://www.youtube.com/embed/6bOIKu9kvmg"
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
