import { useState } from "react";
import "./KontenTabs.css";
import gambarpassenger from "../../assets/passengercar.png";
import gambarcommercial from "../../assets/commercialcar.png";
import dummyCommercial from "../../json/commercialcar.json";
import dummyPassenger from "../../json/passengercar.json";
import { Link } from "react-router-dom";
const KontenTabs = () => {
  const [selectedTabs, setSelectedTabs] = useState("passenger");
  const dataCommercial = dummyCommercial.data;
  const dataPassenger = dummyPassenger.data;

  return (
    <div class="bagiantabs">
      <div class="kontentabs">
        <ul class="tabs">
          <li
            onClick={() => setSelectedTabs("passenger")}
            class={`${selectedTabs === "passenger" ? "picked1" : "unpicked1"}`}
          >
            Passenger Car
          </li>
          <li
            onClick={() => setSelectedTabs("commercial")}
            class={`${selectedTabs === "commercial" ? "picked2" : "unpicked2"}`}
          >
            Commercial Car
          </li>
        </ul>
      </div>
      <div class="isi">
        {selectedTabs === "passenger"
          ? dataPassenger.map((item) => {
              return (
                <div class="passengercar">
                  <div class="gambar">
                    <img src={gambarpassenger} />
                  </div>
                  <div class="desk">
                    <h>{item.mobil}</h>

                    <p1>Mulai Dari</p1>
                    <p2>Rp{item.harga}</p2>
                    <Link to="/produk">
                      <button>Lihat Detail </button>
                    </Link>
                  </div>
                </div>
              );
            })
          : dataCommercial.map((item) => {
              return (
                <div class="commercialcar">
                  <div class="gambar">
                    <img src={gambarcommercial} />
                  </div>
                  <div class="desk">
                    <h>{item.mobil}</h>
                    <p1>Mulai Dari</p1>
                    <p2>Rp{item.harga}</p2>
                    <button>Lihat Detail </button>
                  </div>
                </div>
              );
            })}
      </div>
      <div class="buttonbottom">
        <button>Lihat Semua Mobil</button>
      </div>
    </div>
  );
};

export default KontenTabs;
