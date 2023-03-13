import React from "react";
import gambar from "../assets/Design/umkm.jpg";
import account from "../assets/Icon/user.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Umkm() {
  return (
    <div>
      <div className="w-full mt-[20px] inline-block">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1700px] mx-4 md:mx-auto mt-[50px]">
        <div>
          <h1 className="text-white text-[55px] font-bold">
            Mengenal Tarif PPh Final untuk UMKM
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Tarif PPh final sejatinya merupakan sebutan lain dari PPh Pasal 4
            ayat 2. Dalam pasal ini ada berbagai macam objek pajak seperti jasa
            konstruksi, sewa bangunan, pajak atas obligasi, pajak atas peredaran
            bruto (omzet) usaha. Khusus untuk UMKM, tarif PPh Final adalah 0,5%
            seperti tertuang dalam Peraturan Pemerintah (PP) Nomor 23 Tahun 2018
            tentang Pajak Penghasilan atas Penghasilan Dari Usaha yang Diterima
            atau Diperoleh Wajib Pajak yang Memiliki Peredaran Bruto Tertentu.
            PP 23 Tahun 2018 itu efektif berlaku per 1 Juli 2018. Pemberlakuan
            PP ini sekaligus mencabut Peraturan Pemerintah Nomor 46 Tahun 2013.{" "}
          </p>
          <br />
          <br />
          <img src={gambar} className="my-4" />
          <h1 className="text-white text-[35px] font-bold">
            {" "}
            Tarif PPh Final UMKM{" "}
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            PPh Final untuk pajak UMKM dikenakan pada wajib pajak pribadi dan
            badan yang memiliki omzet usaha kurang dari Rp 4,8 miliar dalam satu
            tahun pajak. Adapun, pokok-pokok perubahan PP No 46/2013 menjadi PP
            No 23/2018 adalah sebagai berikut:.{" "}
            <ul className="list-disc">
              <li>
                Penurunan tarif PPh Final 1% menjadi 0,5% dari omzet, yang wajib
                dibayarkan setiap bulannya;
              </li>
              <li>
                Wajib Pajak dapat memilih untuk mengikuti tarif dengan skema
                final 0,5%, atau menggunakan skema normal yang mengacu pada
                pasal 17 Undang-Undang Nomor 36 Tahun 2008 tentang Pajak
                Penghasilan.
              </li>
              <li>
                Mengatur jangka waktu pengenaan tarif PPh Final 0,5% sebagai
                berikut:
              </li>
              <ul>
                <li className="list-decimal">Bagi Wajib Pajak Orang Pribadi yaitu selama 7 tahun;</li>
                <li className="list-decimal">Bagi Wajib Pajak Badan berbentuk Koperasi, Persekutuan
                Komanditer, atau Firma selama 4 tahun;</li>
                <li className="list-decimal">Bagi Wajib Pajak Badan berbentuk Perseroan Terbatas selama 3
                tahun.</li>
              </ul>
            </ul>
          </p>
          <h1 className="text-white text-[20px] font-bold">
            {" "}
            Bayar Pajak Semudah Isi Pulsa
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Belum maksimalnya kontribusi itu terjadi bukan lantaran pelaku UMKM
            enggan membayar pajak. Pelaku UMKM kerap mengeluhkan tata cara
            penghitungan pajak serta pelaporan pajak. Tergugah oleh kondisi
            tersebut, inovator-inovator Indonesia menciptakan platform yang
            diberi nama Tupai.
            <br />
            <br />
            Aplikasi ini diciptakan untuk memudahkan pembayaran dan pelaporan
            pajak, khususnya bagi pelaku UMKM. Tupai menyediakan fungsi
            pembuatan Surat Setoran Pajak (SSP) Elektronik, berikut dengan
            pembuatan kode billing otomatis untuk semua jenis pasal dan jenis
            setoran pajak. Khusus untuk pelaku UMKM, disediakan fungsi pembuatan
            Surat Setoran Elektronik (SSE) untuk Pajak UMKM (PPh Final) yang
            sebesar 0,5% dari penghasilan bruto. Tupai memiliki fitur pembayaran
            pajak secara langsung. Pengguna tidak perlu berpindah ke aplikasi
            lain atau pergi ke ATM.
            <br />
            <br />
            Pembayaran bisa dilakukan seketika (realtime). Penghitungan,
            pembayaran, dan pelaporan pajak ini sangat terjamin keamanan dan
            validasinya karena telah mengantongi lisensi resmi dari Direktorat
            Jenderal Pajak. Jadi, untuk pelaku UMKM, kamu bisa mencoba aplikasi
            Tupai untuk mengelola perpajakan kalian. Bagi pemilik usaha mikro,
            kecil, dan menengah (UMKM), tahukan Anda berapa tarif PPh Final
            untuk UMKM terbaru 2022? Melalui Undang-Undang Nomor 7 Tahun 2021
            tentang Harmonisasi Peraturan Perpajakan (UU HPP) mengatur Wajib
            Pajak orang pribadi UMKM dengan peredaran bruto sampai dengan Rp 500
            juta per tahun tidak perlu membayar PPh Final sebesar 0,5%.
            <br />
            <br />
            Fasilitas perederan bruto bebas pajak senilai Rp 500 juta ini dapat
            dimanfaatkan oleh Wajib Pajak orang pribadi UMKM yang menggunakan
            skema PPh Final PP No. 23 Tahun 2018 dalam memenuhi kewajiban pajak
            penghasilannya. Artinya jika Wajib Pajak yang dimaksud ternyata
            mempunyai peredaran bruto di bawah Rp 500 juta per tahun, maka Wajib
            Pajak orang pribadi UMKM tidak perlu membayar PPh Final. Namun, jika
            Wajib Pajak memiliki peredaran bruto di atas Rp 500 juta, maka
            setiap peredaran bruto di atas Rp 500 juta saja yang dikenai PPh
            Final UMKM sebesar 0,5%.
          </p>
        </div>
        <div className="my-5 mx-5">
          <iframe
            className="mx-auto md:ml-[40px] max-w-[500px] w-auto md:w-[500px] h-auto md:h-[300px] static"
            src="https://www.youtube.com/embed/uwCyDDJ3UDA"
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
