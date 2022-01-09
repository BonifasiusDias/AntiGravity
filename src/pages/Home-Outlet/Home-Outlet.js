import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CarouselComponent from "../../components/Carousel/Carousel";
import KontenTabs from "../../components/Tabs/KontenTabs";
import "./Home-Outlet.css";
const homeOutlet = () => {
  return (
    <div class="homeoutlet">
      <Header />

      <div class="divheader"></div>
      <div class="karusel">
        <CarouselComponent />
      </div>
      <div class="background">
        <div class="max-width">
          <div class="bg-biru">
            {" "}
            <h1>Temukan Mobil Suzuki yang tepat untuk Anda</h1>
          </div>{" "}
          <KontenTabs />
          <div class="servis">
            <div class="layer">
              <h>PEMESANAN SERVIS</h>
              <p1>Tetap nyaman dan aman berkendara</p1>
              <p1>dengan servis rutin kendaraan Suzuki</p1>
              <button>PESAN SERVIS</button>
            </div>
          </div>
          <div class="aksesoris">
            <div class="layer">
              <h class="titleatas">SUKU CADANG &amp;</h>
              <h>AKSESORIS</h>
              <p1>Temukan berbagai suku cadang dan</p1>
              <p1>aksesoris kendaraan Suzuki Anda</p1>
              <button>SELENGKAPNYA</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default homeOutlet;
