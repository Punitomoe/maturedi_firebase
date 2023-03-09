import React, { useState } from "react";

function Currency() {
  const [amount, setAmount] = useState("");

  // fungsi untuk mengubah nilai input ke format dengan separator ribuan
  const numberWithCommas = (value) => {
    // pisahkan nilai menjadi bagian ribuan dengan regex
    const parts = value.toString().split(".");

    // tambahkan separator ribuan
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // gabungkan kembali nilai
    return parts.join(".");
  };

  // handle perubahan nilai input
  const handleChange = (event) => {
    const value = event.target.value;

    // hapus karakter selain angka dan titik
    const sanitizedValue = value.replace(/[^0-9.]/g, "");

    // ubah nilai menjadi format dengan separator ribuan
    const formattedValue = numberWithCommas(sanitizedValue);

    // set nilai input ke state
    setAmount(formattedValue);
  };

  return (
    <div>
      <label>Masukkan jumlah uang:</label>
      <input type="text" value={amount} onChange={handleChange} />
    </div>
  );
}

export default Currency;
