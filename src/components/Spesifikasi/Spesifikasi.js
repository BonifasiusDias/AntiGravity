import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import "./Spesifikasi.css";
const Spesifikasi = () => {
  const [spesifikasi, setSpesifikasi] = useState(false);

  return (
    <div class="spesifikasi">
      <button
        onClick={() => {
          spesifikasi === false ? setSpesifikasi(true) : setSpesifikasi(false);
        }}
        class="mesin"
      >
        <p>MESIN</p>
        {spesifikasi === true ? (
          <ChevronDownIcon class="icon" fill="none" />
        ) : (
          <ChevronUpIcon class="icon" fill="none" />
        )}
      </button>
      <ul class={spesifikasi ? "true" : "false"}>
        {spesifikasi === true ? (
          <div class="coba">
            <div class="coba2">
              <div class="penjelasan">
                <h>Panjang Keseluruhan</h>
                <p>4,450 mm</p>
              </div>
              <div class="penjelasan">
                <h>Lebar Keseluruhan</h>
                <p>1,775 mm</p>
              </div>
              <div class="penjelasan">
                <h>Tinggi Keseluruhan</h>
                <p>1,710 mm</p>
              </div>
              <div class="penjelasan">
                <h>Jarak Poros Roda</h>
                <p>2,740 mm</p>
              </div>
              <div class="penjelasan">
                <h>Jarak Pijak Depan</h>
                <p>1,515 mm</p>
              </div>
              <div class="penjelasan">
                <h>Jarak Pijak Belakang</h>
                <p>1,530 mm</p>
              </div>
              <div class="penjelasan">
                <h>Jarak Terendah</h>
                <p>5,1</p>
              </div>
              <div class="penjelasan">
                <h>Radius Putar Minimum</h>
                <p>200 mm</p>
              </div>
            </div>
          </div>
        ) : null}
      </ul>
    </div>
  );
};

export default Spesifikasi;
