import gear from "../../assets/gear.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import orange from "../../assets/orange.png";
import white from "../../assets/white.png";
import dataPrice from "../../json/pricedata.json";
import BottomMenu from "../../components/BottomMenu/BottomMenuProduct";
import { useState } from "react";
import "./XL7.css";
import Spesifikasi from "../../components/Spesifikasi/Spesifikasi";
import CarouselComponent from "../../components/Carousel/carouseloutlet";
const XL7 = () => {
  const pricedata = dataPrice.data;
  const [selectedType, setSelectedType] = useState("alpha");
  const [selectedColor, setSelectedColor] = useState("orange");
  return (
    <div>
      <Header />
      <div class="divheader"></div>
      <div>
        <div class="name">
          <h>XL 7</h>
        </div>
        <div class="uppertabs">
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#warna">Tipe &amp; Warna</a>
            </li>
          </ul>
        </div>
        <div class="karuseloutlet">
          <CarouselComponent />
        </div>
        <div class="background">
          <div class="max-width">
            <section class="overview" id="overview">
              <div class="penjelasan">
                <img src={gear} />
                <div class="text">
                  <p1>Suzuki XL7 hadir dengan tampilan maskulin,</p1>
                  <p1>tangguh dan berkarakter. Desain modern SUV</p1>
                  <p1>7-Seater memberikan kebanggan dan</p1>
                  <p1>kepercayaan bagi penggunanya. Dilengkapi</p1>
                  <p1>dengan fitur canggih semakin membuat XL7</p1>
                  <p1>menjadi SUV yang luar biasa di kelasnya</p1>
                </div>
              </div>
              <div class="button">
                <button class="unduh">UNDUH BROSUR</button>
                <button class="harga">HARGA</button>
              </div>
            </section>
            <section class="produk" id="warna">
              <h>TIPE &amp; WARNA</h>
              <div class="tabstipe">
                <ul class="tabs">
                  <li
                    onClick={() => setSelectedType("alpha")}
                    class={`${
                      selectedType === "alpha" ? "picked1" : "unpicked1"
                    }`}
                  >
                    XL7 Alpha
                  </li>
                  <li
                    onClick={() => setSelectedType("beta")}
                    class={`${
                      selectedType === "beta" ? "picked2" : "unpicked2"
                    }`}
                  >
                    XL7 Beta
                  </li>
                  <li
                    onClick={() => setSelectedType("zeta")}
                    class={`${
                      selectedType === "zeta" ? "picked2" : "unpicked2"
                    }`}
                  >
                    XL7 Zeta
                  </li>
                </ul>
              </div>
              <div class="gambarmobil">
                {selectedColor === "orange" ? (
                  <img src={orange} />
                ) : (
                  <img src={white} />
                )}
              </div>
              <div class="tabwarna">
                <button
                  onClick={() => setSelectedColor("orange")}
                  class={`${
                    selectedColor === "orange"
                      ? "pickedwarna1"
                      : "unpickedwarna1"
                  }`}
                ></button>
                <button
                  onClick={() => setSelectedColor("green")}
                  class={`${
                    selectedColor === "green"
                      ? "pickedwarna2"
                      : "unpickedwarna2"
                  }`}
                ></button>
                <button
                  onClick={() => setSelectedColor("black")}
                  class={`${
                    selectedColor === "black"
                      ? "pickedwarna3"
                      : "unpickedwarna3"
                  }`}
                ></button>
                <button
                  onClick={() => setSelectedColor("white")}
                  class={`${
                    selectedColor === "white"
                      ? "pickedwarna4"
                      : "unpickedwarna4"
                  }`}
                ></button>
              </div>
            </section>
            <section class="interior">
              <div class="judul">
                <h>Eksterior</h>
              </div>
              <div class="line0">
                <p>Bold LED Headlamp with DRL (AUTO ON)</p>
              </div>
              <div class="line1">
                <div class="first">
                  <p1>MUSCULA CHROME</p1>
                  <p2>FRONT GRILLE</p2>
                </div>
                <div class="second">
                  <p1>GARNISH FRONT BUMPER</p1>
                  <p2>LOWER</p2>
                </div>
              </div>
              <div class="line2">
                <div class="first">
                  <p>OUTSIDE DOOR MIRROR</p>
                </div>
                <div class="second">
                  <p>ROOF RAIL</p>
                </div>
              </div>
              <div class="tombolbawah">
                <button>Lihat Semua Eksterior</button>
              </div>
            </section>
            <section class="interior">
              <div class="judul">
                <h>Eksterior</h>
              </div>
              <div class="line0">
                <p>Extra Large Space for Seven</p>
              </div>
              <div class="line1">
                <div class="first">
                  <p1>AC DIGITAL</p1>
                </div>
                <div class="second">
                  <p1>ENGINE START</p1>
                  <p2>STOP BUTTON (ALPHA &amp;</p2>
                  <p2>BETA)</p2>
                </div>
              </div>
              <div class="line2">
                <div class="first">
                  <p1>STUNNING MID DISPLAY</p1>
                  <p2>COLOR DOT</p2>
                </div>
                <div class="second">
                  <p1> 1ST &amp; 2ND ROW CENTER</p1>
                  <p2>ARM REST</p2>
                </div>
              </div>
              <div class="tombolbawah">
                <button>Lihat Semua Eksterior</button>
              </div>
            </section>
            <section class="spesifikasi">
              <h>Spesifikasi</h>
              <Spesifikasi />
            </section>
            <section class="harga">
              <h1>Daftar Harga</h1>
              <h2>XL 7</h2>
              {pricedata.map((item) => {
                return (
                  <div class="pricecard">
                    <h>{item.mobil}</h>
                    <p>Rp{item.harga}</p>
                  </div>
                );
              })}
              <div class="button">
                <button>Lihat Semua Harga Mobil</button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <div class="bgbottommenu">
        <BottomMenu />
      </div>
    </div>
  );
};

export default XL7;
