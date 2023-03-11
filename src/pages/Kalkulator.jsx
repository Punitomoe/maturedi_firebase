import React from "react";
import { useState } from "react";
import headerBackground from "../assets/Design/kalkulator.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import avatar from "../assets/Icon/avatar.png";
import store from "../assets/Icon/store.png";
import motorbike from "../assets/Icon/motorbike.png";

function Kalkulator() {
  const [penghasilan, setPenghasilan] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [tanggungan, setTanggungan] = useState(0);
  const [hasil, setHasil] = useState(0);
  const [omzetValue, setOmzetValue] = useState(0);
  const [omzetResult, setOmzetResult] = useState(0);

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  const handleTanggungan = (e) => {
    const jenis = e.target.value;
    switch (jenis) {
      case "TK/0":
        setTanggungan(0);
        break;
      case "TK/1":
        setTanggungan(4500000);
        break;
      case "TK/2":
        setTanggungan(9000000);
        break;
      case "TK/3":
        setTanggungan(13500000);
        break;
      case "K/0":
        setTanggungan(4500000);
        break;
      case "K/1":
        setTanggungan(9000000);
        break;
      case "K/2":
        setTanggungan(13500000);
        break;
      case "K/3":
        setTanggungan(18000000);
        break;
      case "K/I/0":
        setTanggungan(54000000);
        break;
      case "K/I/1":
        setTanggungan(58500000);
        break;
      case "K/I/2":
        setTanggungan(58500000);
        break;
      case "K/I/3":
        setTanggungan(67500000);
        break;
      default:
        setTanggungan(0);
        break;
    }
  };

  const hitungHasil = (event) => {
    event.preventDefault();
    let gajiBersih = parseInt(penghasilan) + parseInt(bonus);
    let tanggunganAkhir = parseInt(tanggungan) + 54000000;
    let total = gajiBersih - tanggunganAkhir;

    if (gajiBersih < 60000000) {
      setHasil(0);
    } else {
      console.log(gajiBersih);
      console.log(tanggunganAkhir);
      console.log(tanggungan);
      console.log(total);

      if (total <= 60000000) {
        setHasil(addCommas(removeNonNumeric(total * 0.05)));
      } else if (total <= 310000000) {
        setHasil(
          addCommas(removeNonNumeric((total - 60000000) * 0.15 + 3000000))
        );
      } else if (total <= 810000000) {
        setHasil(
          addCommas(
            removeNonNumeric((total - 310000000) * 0.25 + 3000000 + 37500000)
          )
        );
      } else if (total <= 5810000000) {
        setHasil(
          addCommas(
            removeNonNumeric((total - 810000000) * 0.30 + 3000000 + 37500000 + 125000000)
          )
        );
      } else {
        setHasil(
          addCommas(
            removeNonNumeric(
              (total - 5810000000) * 0.35 + 3000000 + 37500000 + 125000000 + 1500000000
            )
          )
        );
      }
    }
    if (total <= 0) {
      setHasil(0);
    }
  };

  const handleOmzet = (event) => {
    event.preventDefault();

    if (omzetValue < 4800000000) {
      setOmzetResult(addCommas(removeNonNumeric(omzetValue * 0.005)));
    }
  };
  

  return (
    <div>
      <div className="relative">
        <div className="w-full mt-[20px] absolute inline-block">
          <Navbar />
        </div>
        <img src={headerBackground} className="bg-cover w-full h-[600px]" />
        <div className="absolute inline-block bottom-0 left-0 z-10 text-left mx-[20px] md:mx-[90px] sm:mx-[180px] mb-[20px] sm:mb-[50px] px-[0px] md:px-[350px] sm:px-[350px] cursor-default ">
          <h1 className="text-[#FFFFFF] font-bold text-[30px] sm:text-[64px]">
            Temukan dan atur masalah
            <a className="text-[#3CC602]"> keuangan</a> Anda sendiri di sini!{" "}
          </h1>
          <h3 className="text-[#9999A1] text-[16px] sm:text-[24px]">
            Hitung besaran pajak sesuai dengan penghasilan dan temukan solusi
            untuk membantu mengatur keuangan Anda.
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pt-5">
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
                id="penghasilan"
                type="number"
                onChange={(e) => setPenghasilan(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Bonus THR dan sebagainya :</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                id="thr"
                type="number"
                onChange={(e) => setBonus(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Status perkawinan / tanggungan :</label>
              <select
                onChange={handleTanggungan}
                data-testid="select"
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              >
                <option data-testid="select-option" value="TK/0">
                  TK/0
                </option>
                <option data-testid="select-option" value="TK/1">
                  TK/1
                </option>
                <option data-testid="select-option" value="TK/2">
                  TK/2
                </option>
                <option data-testid="select-option" value="TK/3">
                  TK/3
                </option>
                <option data-testid="select-option" value="K/0">
                  K/0
                </option>
                <option data-testid="select-option" value="K/1">
                  K/1
                </option>
                <option data-testid="select-option" value="K/2">
                  K/2
                </option>
                <option data-testid="select-option" value="K/3">
                  K/3
                </option>
                <option data-testid="select-option" value="K/I/0">
                  K/I/0
                </option>
                <option data-testid="select-option" value="K/I/1">
                  K/I/1
                </option>
                <option data-testid="select-option" value="K/I/2">
                  K/I/2
                </option>
                <option data-testid="select-option" value="K/I/3">
                  K/I/3
                </option>
              </select>
            </div>
            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              onClick={hitungHasil}
            >
              TOTAL
            </button>
          </form>
          <div className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B] flex flex-col text-gray-400 py-2">
            <label>Jumlah kisaran pajak yang harus dibayar :</label>
            <div className="shadow-lg p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none">
              Rp. {hasil}
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
                type="number"
                onChange={(e) => setOmzetValue(e.target.value)}
              />
            </div>
            <button
              onClick={handleOmzet}
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            >
              TOTAL
            </button>
          </form>
          <div className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B] flex flex-col text-gray-400 py-2">
            <label>Jumlah kisaran pajak yang harus dibayar :</label>
            <div className="shadow-lg p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none">
              Rp. {omzetResult}
            </div>
          </div>
        </div>

        {/* PAJAK KENDARAAN*/}
        <div className="w-full bg-[#18181B] sm:items-center sm:content-start sm:justify-item-center stroke-[#272728] shadow-xl flex flex-col p-4 my-4 rounded-tl-[40px] rounded-br-[40px] hover:scale-105 duration-300">
          <img
            className="w-[150px] mx-auto mt-[2rem]"
            src={motorbike}
            alt="/"
          />
          <h2 className="text-[40px] font-bold text-center py-8 text-white cursor-default">
            Pajak Kendaraan
          </h2>
          <form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B]">
            <div className="flex flex-col text-gray-400 py-2">
              <label>
                Pajak kendaraan cenderung memiliki nilai pasti yang tidak
                terpengaruh pada besaran pendapatan pengguna dan sudah
                ditentukan oleh pihak samsat.
              </label>
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              <a href="https://e-samsat.id/" target="_blank" rel="noreferrer">
                Kunjungi E-Samsat
              </a>
            </button>
          </form>
        </div>
      </div>
      <Cards />
      <Footer />
    </div>
  );
}

export default Kalkulator;
