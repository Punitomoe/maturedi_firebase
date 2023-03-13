import React from "react";
import account from "../assets/Icon/user.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Kendaraan() {
  return (
    <div>
      <div className="w-full mt-[20px] inline-block">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1700px] mx-4 md:mx-auto mt-[50px]">
        <div>
          <h1 className="text-white text-[55px] font-bold">
            Syarat Bayar Pajak Motor dan Mobil 2023 Dan Cara Bayarnya!
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Seperti yang sudah semua orang tahu, setiap kendaraan yang ada
            memiliki pajaknya masing-masing. Dan yang namanya pajak, tentu saja
            sangat wajib sekali untuk semua orang bayar. Tidak terkecuali untuk
            pajak motor.
            <br />
            <br />
            Jika ingin melakukan pembayaran uang pajak motor, jangan lupa untuk
            menyiapkan beberapa dokumen penting yang sudah tertulis di bawah ini
            ya. Jangan sampai ada yang terlewatkan barang satu dokumen pun..
            <br />
            <br />
            <ul className="list-disc">
              <li>
                Pertama, yang pasti harus semua orang bawa saat membayar pajak
                adalah Surat Tanda Nomor Kendaraan (STNK) yang asli dan yang
                berbentuk fotokopi.
              </li>
              <li>
                Selain itu, Buku Pemilik Kendaraan Bermotor (BPKB) juga jangan
                sampai lupa terbawa ya karena dokumen asli dan fotokopinya akan
                pembayar perlukan
              </li>
              <li>
                Membawa identitas dari orang yang memiliki motor seperti KTP
                baik yang berbentuk asli maupun yang berbentuk fotokopi.
              </li>
              <li>
                Tunggakan pajak yang ada tidak lebih dari jangka waktu satu
                tahun.
              </li>
              <li>
                Jika orang lain yang hendak melakukan pembayaran selain yang
                memiliki kendaraan bermotor, biasanya akan dimintai surat kuasa.
              </li>
              <li>
                Terakhir, yang pasti sejumlah uang yang nantinya akan dibayarkan
                pajak motornya.
              </li>
            </ul>
            Bagi yang hendak melakukan pembayaran pajak motor, harap selalu
            menyiapkan beberapa syarat yang telah tertulis di bagian atas tadi
            ya.
          </p>
          <h1 className="text-white text-[35px] font-bold">
            {" "}
            Apa Syarat Bayar Pajak Motor Telat 1 Tahun?{" "}
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Bagi yang memiliki kendala belum melakukan pembayaran pajak motor
            lebih dari 1 tahun sejak jatuh tempo, sebenarnya itu bukan kendala
            yang berarti ya.
            <br />
            <br />
            Sebab, syarat yang diperlukan untuk melakukan pembayaran pajak jika
            kondisinya seperti ini sama saja dengan tidak melakukan penunggakan
            untuk masalah syarat.
            <br />
            <br />
            Yang membedakan hanya pada uang pembayarannya saja. Tentunya, orang
            yang membayar pajak tepat waktu akan membayar dengan uang yang
            jumlahnya lebih sedikit.
            <br />
            <br />
            Berbeda dengan orang yang melakukan penunggakan. Uang yang orang ini
            mesti bayarkan lebih banyak karena sudah digabung dengan jumlah
            denda yang ada.
            <br />
            <br />
            Maka dari itu, jika merasa sudah melakukan penunggakan pajak lebih
            dari 1 tahun, bawa uang yang lebih banyak dari biasanya ya. Karena
            ada denda yang harus kita lunasi juga. <br />
            <br />
            Setelah mengetahui apa saja syarat bayar pajak motor, kini kita
            sudah mulai bisa melakukan pembayaran pajaknya. Bagi yang belum
            mengetahui caranya, akan ada beberapa tutorial terkait hal ini di
            bawah.
          </p>
          <h1 className="text-white text-[20px] font-bold">
            {" "}
            Cara Bayar Pajak Motor Dan Ganti Plat{" "}
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Bagi yang merasa tidak keberatan untuk mengunjungi samsat untuk
            melakukan pembayaran pajak bisa mengikuti tata cara bayar pajak dan
            ganti plat di samsat yang ada di bawah ini.
            <br />
            <br />
            <ul className="list-disc">
              <li>
                Pertama, tentunya datangi saja kantor samsat dan langsung ke
                bagian loketnya saja.
              </li>
              <li>
                Sampaikan saja maksud kedatangan kita maka nantinya petugas akan
                memberikan formulir perpanjang STNK.
              </li>
              <li>
                Jika sudah mendapatkan formulirnya, silahkan langsung isi saja
                semua datanya dengan benar sesuai dengan data STNK dan BPKP
                dengan benar.
              </li>
              <li>
                Silahkan siapkan dan lampirkan saja semua syarat bayar pajak
                motor sesuai dengan yang sebelumnya sudah tertulis di bagian
                atas.
              </li>
              <li>
                Kalau sudah selesai, serahkan saja dokumen tadi ke bagian loket
                penyerahan berkas.
              </li>
              <li>
                Tunggulah selama beberapa saat hingga nama yang sesuai dengan
                STNK tadi dipanggil.
              </li>
              <li>
                Jika namanya sudah dipanggil, nantinya akan ada petugas akan
                memberikan slip pembayaran yang berisi sejumlah uang.
              </li>
              <li>
                Serahkan saja slip pembayaran dan juga sejumlah uang yang harus
                dibayarkan tadi ke bagian kasir.
              </li>
              <li>
                Setelah itu, akan ada bukti pembayarn yang bisa langsung kita
                berikan ke loket pengambilan STNK baru.
              </li>
              <li>
                Kalau sudah kita berikan ke petugas, tunggu saja sejenak hingga
                petugas melakukan panggilan. Baru setelahnya akan ada STNK baru
                yang akan diterima
              </li>
              <li>
                Bagi yang sedang menjalankan proses pembayaran 5 tahunan,
                silahkan bawa bukti pembayaran ke bagian loket Tanda Nomor
                Kendaraan Bermotor (TNKB) untuk pengambilan plat kendaraan.
              </li>
            </ul>
            Meskipun prosesnya yang memang agak panjang, pastikan ikuti saja
            semua prosedurnya secara rinci. Dan jangan lupa juga untuk
            menyiapkan semua syarat yang memang perlu.
          </p>
          <h1 className="text-white text-[20px] font-bold">
            {" "}
            Cara Membayar Pajak Motor Di Alfamart Atau Indomaret
          </h1>
          <p className=" text-[#9999A1] text-[20px] my-5">
            Bagi yang mau melakukan pembayaran pajak dengan lebih efisien lagi,
            silahkan pakai saja cara yang tertulis pada bagian ini ya. Berikut
            detail tutorial nya.
          </p>
          <ul className="list-disc text-[#9999A1] text-[20px] my-5">
            <li>
              Pertama, siapkan saja semua syarat bayar bayar pajak motor yang
              ada.
            </li>
            <li>
              Setelahnya, datangi saja salah satu gerai Alfamart atau Indomaret
              yang paling dekat lokasinya.
            </li>
            <li>
              Silahkan berikan saja beberapa informasi yang petugas kasir minta
              seperti nomor plat, nomor mesin, dan lainnya.
            </li>
            <li>
              Begitu kasir sudah memasukkan datanya dengan benar, tagihan yang
              harus dibayar akan keluar.
            </li>
            <li>Berikan saja sejumlah uang yang petugas kasir minta.</li>
            <li>
              Nantinya, akan ada SMS masuk dari Polri yang berisi Electronic
              Registration and Identification (ERI).
            </li>
            <li>
              Silahkan buka saja link tersebut. Nanti, akan ada gambar bukti
              pembayaran lengkap dengan QR-nya. Jangan lupa untuk simpan gambar
              tadi.
            </li>
          </ul>
        </div>
        <div className="my-5 mx-5">
          <iframe
            className="mx-auto md:ml-[40px] max-w-[500px] w-auto md:w-[500px] h-auto md:h-[300px] static"
            src="https://www.youtube.com/embed/ZP6ELPUPVpU"
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
