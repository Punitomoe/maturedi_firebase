import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ptkp from "../assets/Design/PTKP.jpeg";
import tabel from "../assets/Design/tabel.jpeg";

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
          <p className=" text-[#9999A1] text-[20px] my-5">
            Pajak Penghasilan (PPh) adalah pajak yang dikenakan atas penghasilan
            yang diperoleh oleh Wajib Pajak (WP) dari berbagai jenis sumber
            penghasilan, baik dari penghasilan dari usaha, kerja, modal, atau
            penghasilan lainnya. PPh dibayarkan ke negara melalui Direktorat
            Jenderal Pajak (DJP) sebagai badan pelaksana pengumpulan dan
            penagihan pajak.
            <br />
            <br />
            <img src={ptkp} className="my-4" />
            Sebagaimana diketahui, pajak penghasilan (PPh) di Indonesia sudah
            mengalami perubahan sejak adanya UU HPP pada 1 Januari 2022.
            Pemerintah juga memberlakukan tarif PPh karyawan secara progresif.
            Artinya, makin besar penghasilan wajib pajak, pajak yang dikenakan
            bakal lebih besar. Tarif pajak baru dalam UU HPP yang mulai berlaku
            sejak awal tahun ini berubah dari empat menjadi lima layer. Berikut
            rinciannya:
            <br />
            <br />
            <ul className="list-disc">
              <li>Penghasilan sampai dengan Rp 60 juta kena tarif PPh 5%</li>
              <li>Penghasilan di atas Rp 60 juta - Rp250 kena tarif PPh 15%</li>
              <li>
                Penghasilan di atas Rp 250 juta – Rp 500 juta dikenaikan tarif
                Pph 25%
              </li>
              <li>
                Penghasilan di atas Rp 500 juta – Rp 5 miliar dikenaikan tarif
                PPh 30%
              </li>
              <li>Penghasilan di atas Rp 5 miliar dikenakan tarif PPh 35%</li>
            </ul>
            <img src={tabel} className="my-4" />
          </p>
          <h1 className="text-white text-[35px] font-bold">
            {" "}
            Contoh Perhitungan PPh 21{" "}
          </h1>
          <h1 className="text-white text-[20px] font-bold mt-5">
            {" "}
            Perhitungan PPh 21 Metode Nett{" "}
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Dengan perhitungan PPh 21 metode nett, perusahaan menanggung
            potongan pajak karyawan. Artinya, karyawan terima gaji bersih
            sehingga tidak perlu lagi membayarkan potongan pajaknya.{" "}
          </p>
          <h1 className="text-white text-[20px] font-bold">
            {" "}
            Perhitungan PPh 21 Metode Gross{" "}
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Kalau karyawan menanggung sendiri pajak penghasilannya, maka metode
            gross ini bisa digunakan. Lalu, bagaimana contoh perhitungan PPh 21
            menggunakan metode gross ini?
            <br />
            <br />
            Misalnya, ada seorang karyawan yang memiliki gaji per bulan
            Rp11.000.000, statusnya lajang tanpa tanggungan (PTKP TK/0). <br />
            <br />
            <ul className="list-disc">
              <li>
                Langkah 1: Pendapatan bruto – biaya jabatan = Pendapatan nett
                Rp11.000.000 – (5% x Rp11.000.000) = Rp10.450.000
              </li>
              <li>
                Langkah 2: Penghasilan nett bulanan x 12 = Penghasilan nett per
                tahun Rp10.450.000 x 12 = Rp125.400.000
              </li>
              <li>
                Langkah 3: Penghasilan nett setahun – PTKP TK/0 = Penghasilan
                Kena Pajak Rp125.400.000 – Rp54.000.000 = Rp71.400.000
              </li>
              <li>
                Langkah 4: Contoh perhitungan PPh 21 Terutang Setahun Pajak
                Progresif (5% x Rp60.000.000) + (15% x Rp11.400.00) =
                Rp4.710.000
              </li>
              <li>
                Langkah 5: Contoh perhitungan PPh 21 Terutang Sebulan
                Rp5.710.000 :12 bulan = Rp392.500
              </li>
            </ul>
          </p>
          <h1 className="text-white text-[20px] font-bold">
            {" "}
            Perhitungan PPh 21 Metode Gross UP
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Dengan metode gross up, karyawan menerima tunjangan sejumlah
            potongan pajak yang dikenakan. Untuk perhitungannya sendiri, berbeda
            dibandingkan dengan dua metode yang sudah disebutkan sebelumnya.
            Sebelum melakukan perhitungan gross up kita harus tahu perhitungan
            untuk PKP dengan mengikuti formula Lapisan PKP berikut ini:
          </p>
          <ul className="list-disc text-[#9999A1] text-[20px] my-5">
            <li>
              Lapisan 1 dengan PKP Rp0 – Rp47.500.000 (PKP setahun – 0) x 5/95 +
              0,
            </li>
            <li>
              Lapisan 2 dengan PKP Rp47.500.000 – Rp217.500.000 (PKP setahun –
              Rp47.500.000) x 15/85 +Rp2.500.000,
            </li>
            <li>
              Lapisan 3 dengan PKP Rp217.500.000 – Rp405.000.000 (PKP setahun –
              Rp217.500.000) x 25/75 + Rp32.500.000
            </li>
            <li>
              Lapisan 4 PKP lebih dari Rp405.000.000 (PKP setahun –
              Rp405.000.000) x 30/70 + Rp95.000.000
            </li>
          </ul>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Dengan menggunakan contoh kasus, gaji per bulan adalah Rp11.000.000,
            dengan status lajang tanpa tanggungan (PTKP TK/0).
            <br />
            <br />
            Hitung gaji per tahun = Rp 11.000.000 x 12 bulan = Rp132.000.000
            <br />
            <br />
            Hitung penghasilan bersih setahun = Rp132.000.000 – (5% x
            Rp132.000.000) = Rp125.400.000
            <br />
            <br />
            PKP setahun = Penghasilan bersih setahun – PTKP
            <br />
            <br />
            = Rp125.400.000 – Rp54.000.000
            <br />
            <br />
            = Rp71.400.000
            <br />
            <br />
            Maka berlaku rumus lapisan kedua untuk mendapatkan Tunjangan Pajak
            yaitu (PKP setahun – Rp47.500.000) x 15/85 +Rp2.500.000 <br />
            <br />
            (Rp71.400.000 – Rp47.500.000) x 15/85 +Rp2.500.000 = Rp6.717.647
            <br />
            <br />
            Jadi, tunjangan pajak dalam sebulan adalah Rp6.717.647 : 12 bulan =
            Rp559.803
            <br />
            <br />
            Maka tunjangan ini dimasukkan dalam komponen gaji sehingga gaji yang
            diterima adalah Rp11.000.000 + Rp559.803 = Rp11.559.803
            <br />
            <br />
            Untuk perhitungan PPh 21 gross up memang sedikit lebih rumit namun
            demikian, dengan adanya contoh perhitungan PPh 21 di atas jadi lebih
            mudah dipahami. <br />
            <br />
          </p>
        </div>
        <div className="my-5">
          <iframe
            className="mx-auto md:ml-[40px] max-w-[500px] w-auto md:w-[500px] h-auto md:h-[300px] static md:fixed"
            src="https://www.youtube.com/embed/7Jx9fV6wVjg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
