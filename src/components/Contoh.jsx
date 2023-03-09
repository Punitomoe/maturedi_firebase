import { useState } from "react";

function Contoh() {
  const [penghasilan, setPenghasilan] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [tanggungan, setTanggungan] = useState(0);
  const [omzetValue, setOmzetValue] = useState(0);

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  const handleTanggungan = (e) => {
    const jenis = e.target.value;
    switch (jenis) {
      case "TK/0":
        setTanggungan(0);
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
      default:
        setTanggungan(0);
        break;
    }
  };

  const hitungHasil = () => {
    let gajiBersih = parseInt(penghasilan) + parseInt(bonus);
    let tanggunganAkhir = parseInt(tanggungan) + 54000000;
    let total = gajiBersih - tanggunganAkhir;
    if (gajiBersih < 50000000) {
      dispatch(calculate(0));
    } else {
      if (total <= 50000000) {
        dispatch(calculate(addCommas(removeNonNumeric(total * 0.05))));
      } else if (total <= 300000000) {
        dispatch(
          calculate(
            addCommas(removeNonNumeric((total - 50000000) * 0.15 + 2500000))
          )
        );
      } else if (total <= 750000000) {
        dispatch(
          calculate(
            addCommas(
              removeNonNumeric((total - 300000000) * 0.25 + 25000000 + 37500000)
            )
          )
        );
      } else {
        dispatch(
          calculate(
            addCommas(
              removeNonNumeric(
                (total - 750000000) * 0.3 + 25000000 + 37500000 + 125000000
              )
            )
          )
        );
      }
    }
  };

  const handleOmzet = () => {
    if (omzetValue < 4800000000) {
      dispatch(calculateOmzet(addCommas(removeNonNumeric(omzetValue * 0.005))));
    }
  };

  return (
    <div>
      <div>
        <div >
          <h1> Kalkulator Pajak </h1>
          <p>
            {" "}
            Hitung kisaran pajak yang harus kamu bayarkan di Kalkulator Pajak!{" "}
          </p>
        </div>

        <div >
          <div >
            <div >
              <h1>Pajak Karyawan</h1>
              <label>Penghasilan dalam Setahun :</label>
              <input
                id="penghasilan"
                type="number"
                data-testid="penghasilan"
                onChange={(e) => setPenghasilan(e.target.value)}
              />
              <label>Bonus THR dan sebagainya :</label>
              <input
                id="thr"
                type="number"
                data-testid="bonus"
                onChange={(e) => setBonus(e.target.value)}
              />
              <label>Status Perkawinan/Tanggungan</label>
              <select onChange={handleTanggungan} data-testid="select">
                <option data-testid="select-option" value="TK/0">
                  TK/0
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
              </select>
              <div>
                <button
                  variant="contained"
                  onClick={hitungHasil}
                  data-testid="jumlahkaryawan"
                >
                  Jumlah
                </button>
              </div>
              <div>
                <p>Jumlah kisaran pajak yang harus dibayar :</p>
                <div className="result">Rp. {hasil}</div>
              </div>
            </div>
          </div>

          <div >
            <div >
              <h1>Pajak UMKM</h1>
              <label>Omzet penghasilan dalam setahun :</label>
              <input
                type="number"
                data-testid="umkm"
                onChange={(e) => setOmzetValue(e.target.value)}
              />
              <div>
                <button
                  variant="contained"
                  onClick={handleOmzet}
                  data-testid="jumlahumkm"
                >
                  Jumlah
                </button>
              </div>
              <div>
                <p>Jumlah kisaran pajak yang harus dibayar:</p>
                <div className="result">Rp. {omzetResult}</div>
              </div>
            </div>
          </div>

          <div
            
            style={{ backgroundImage: `url(${PajakKendaraan})` }}
          >
            <div>
              <h1>Pajak Kendaraan</h1>
              <p>
                Pajak kendaraan cenderung memiliki nilai pasti yang tidak
                terpengaruh pada besaran pendapatan pengguna dan sudah
                ditentukan oleh pihak samsat
              </p>
              <div>
                <button>
                  <a
                    href="https://e-samsat.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kunjungi E-Samsat
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contoh;