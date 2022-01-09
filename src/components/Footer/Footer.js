import "./Footer.css";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import hotlinesuzuki from "../../assets/HaloZuzuki.png";
import mysuzuki from "../../assets/MyZuzuki.png";
import ecstar from "../../assets/Ecstar.png";
const Footer = () => {
  return (
    <div class="footer">
      <div class="bottommenu">
        <p>Beranda</p>
        <p>Tentang Kami</p>
        <p>Outlet</p>
        <p>Blog</p>
        <p>Promo</p>
      </div>
      <div class="alamat">
        <h1>ALAMAT</h1>
        <p1>SUZUKI Nusantara Jaya Sentosa</p1>
        <p2>Jl. Soekarno - Hatta no. 289, Bojongloa Kidul Bandung 40234</p2>
        <button class="locationbutton">
          <LocationMarkerIcon class="locationlogo" />
          <p>CEK GOOGLE MAPS </p>
        </button>
        <button class="phonebutton">
          <PhoneIcon class="phone" />
          <p>(022)5204645</p>
        </button>
      </div>
      <div class="hotline">
        <h1>HOTLINE 24 JAM (Bebas Pulsa)</h1>
        <img src={hotlinesuzuki}></img>
        <h1>DOWNLOAD MY SUZUKI</h1>
        <img src={mysuzuki}></img>
        <img src={ecstar}></img>
      </div>
      <div class="copyright">
        <p class="line1">&copy; 2020 Suzuki Indonesia</p>
        <p class="line2">All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
