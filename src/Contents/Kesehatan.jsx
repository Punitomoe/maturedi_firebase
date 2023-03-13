import React from "react";
import account from "../assets/Icon/user.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Kesehatan() {
  return (
    <div>
      <div className="w-full mt-[20px] inline-block">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1700px] mx-4 md:mx-auto mt-[50px]">
        <div>
          <h1 className="text-white text-[55px] font-bold">
            Cara Daftar BPJS Kesehatan Tahun 2023
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Pendaftaran BPJS Kesehatan bisa dilakukan secara online. Sehingga
            calon peserta tidak perlu datang dan mengantre di kantor BPJS. Namun
            perlu diperhatikan ada beberapa langkah dan persyaratan yang harus
            dilakukan. Tapi hal pertama yang harus dilakukan calon peserta harus
            mengunduh aplikasi JKN di smartphone anda.
            <br />
            <br />
            Kepemilikan BPJS Kesehatan ini penting untuk dimiliki, karena
            menjamin perlindungan kesehatan untuk banyak jenis penyakit. Namun
            jangan lupa untuk terus membayar iuran kepesertaan tiap bulan. Untuk
            pendaftaran ada beberapa syarat yang harus dilampirkan ketika
            mendaftar. Antara lain :
            <br />
            <br />
            <ul className="list-decimal">
              <li>Kartu Keluarga</li>
              <li>Kartu Tanda Penduduk</li>
              <li>NPWP</li>
              <li>Nomor Handphone</li>
              <li>Buku Rekening</li>
              <li> Pas foto ukuran 3x4 dengan ukuran digital maksimal 50 kb</li>
              <li>Alamat email</li>
            </ul>
            <br />
            Cara Daftar BPJS Kesehatan Secara Online Setelah melengkapi
            persyaratan, Anda bisa langsung mendaftar di aplikasi Mobile JKN.
            Berikut ini cara daftar BPJS Kesehatan secara online via aplikasi
            Mobile JKN:
          </p>
          <p className=" text-[#9999A1] text-[20px] my-5">
            <ul className="list-decimal">
              <li>
                Unduh aplikasi Mobile JKN di Google Play Store atau Apps Store
              </li>
              <li>
                Buka aplikasi Mobile JKN di smartphone Anda, lalu klik "Daftar"
              </li>
              <li>Pilih "Pendaftaran Peserta Baru"</li>
              <li>Baca ketentuan pendaftaran, lalu klik "Setuju"</li>
              <li>
                Masukkan NIK KTP, ketik kode captcha. Halaman smartphone akan
                menampilkan daftar data keluarga dan calon peserta BPJS
                Kesehatan
              </li>
              <li>Isi data diri, lalu klik "Selanjutnya"</li>
              <li>
                Pilih fasilitas kesehatan (faskes) yang diinginkan, termasuk
                dokter gigi
              </li>
              <li>Masukkan alamat email yang aktif, klik "Simpan"</li>
              <li>
                Kode verifikasi akan dikirimkan melalui alamat email yang
                didaftarkan
              </li>
              <li>
                Cek email masuk dan salin kode verifikasi tersebut ke aplikasi
                Mobile JKN
              </li>
              <li>
                Peserta akan mendapatkan virtual account untuk pembayaran premi.
              </li>
            </ul>
          </p>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Jika sudah selesai mendaftar BPJS Kesehatan secara online dan telah
            melakukan pembayaran, maka peserta resmi terdaftar di BPJS
            Kesehatan. Kartu BPJS Kesehatan juga dapat diakses melalui aplikasi
            Mobile JKN. Peserta juga bisa mencetaknya untuk menjadi kartu fisik
            atau menggunakan kartu digital setiap kali akan berobat di fasilitas
            kesehatan.
            <br /> <br />
            Apabila menghadapi kendala saat melakukan pendaftaran, maka bisa
            menghubungi layanan BPJS Kesehatan melalui nomor 165.
          </p>
          <h1 className="text-white text-[30px] font-bold">
            {" "}
            Cara Praktis Bayar BPJS Kesehatan
          </h1>
          <br />
          <h1 className="text-white text-[20px] font-bold">
            {" "}
            Melalui Website Resmi BPJS Kesehatan
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Peserta dapat melakukan pembayaran iuran bulanan melalui laman resmi
            BPJS. Pembayaran iuran melalui website resmi BPJS Kesehatan
            dilakukan secara auto debit sehingga tidak perlu khawatir lupa
            melakukan pembayaran. Namun, perlu diingat untuk pastikan saldo
            cukup pada rekening Anda atau layanan kartu kredit masih dalam
            kondisi aktif.
            <br /> <br />
            Berikut cara membayar iuran BPJS Kesehatan melalui website resmi
            BPJS:
          </p>
          <p className=" text-[#9999A1] text-[20px] my-5">
            <ul className="list-decimal">
              <li>
                Kunjungi laman resmi BPJS Kesehatan di{" "}
                <a
                  href="https://bpjs-kesehatan.go.id/bpjs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://bpjs-kesehatan.go.id/bpjs/
                </a>
              </li>
              <li>Pilih menu “Layanan”, lalu pilih “Auto debit”</li>
              <li>
                Lakukan pendaftaran autodebit melalui pilihan metode yang
                tersedia seperti bank (Mandiri dan BCA) atau non-bank (Doku,
                Visa, dan Mastercard)
              </li>
              <li>
                Baca Syarat & Ketentuan, pilih kolom “Saya telah membaca dan
                menyetujui syarat dan ketentuan yang berlaku.” dan klik
                “lanjutkan”
              </li>
              <li>Masukkan data pribadi</li>
              <li>Klik “Proses” untuk memulai proses pendaftaran</li>
            </ul>
          </p>
        </div>
        <div className="my-5 mx-5">
          <iframe
            className="mx-auto md:ml-[40px] max-w-[500px] w-auto md:w-[500px] h-auto md:h-[300px] static"
            src="https://www.youtube.com/embed/XwBX-VHX2Y8"
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
