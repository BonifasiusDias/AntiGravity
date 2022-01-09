import "./Header.css";
import { useState } from "react";
import { MenuIcon, XIcon, PhoneIcon } from "@heroicons/react/outline";
import hotlinesuzuki from "../../assets/HaloZuzuki.png";
import mysuzuki from "../../assets/MyZuzuki.png";
import logo from "../../assets/MainHeaderLogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [navbarOn, setNavbarOn] = useState(true);
  return (
    <>
      <div class="header">
        <div class="logodiv">
          <img class="logo" src={logo} />
        </div>
      </div>
      <div class="navbar">
        {navbarOn ? (
          <button onClick={() => setNavbarOn(false)} class="button">
            <MenuIcon class="icon" />
          </button>
        ) : (
          <div class="backgroundsidemenu">
            <div class="sidemenu">
              <button onClick={() => setNavbarOn(true)} class="atas">
                <XIcon class="icon" />
              </button>
              <div class="menu">
                <Link to="/">
                  <li>
                    <a>Beranda</a>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <a>Tentang Kami</a>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <a>Mobil</a>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <a>Service</a>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <a>Sparepart</a>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <a>Hubungi Kami</a>
                  </li>
                </Link>
              </div>
              <div class="telfontombol">
                <button class="telfon">
                  <PhoneIcon class="icontelfon" />
                  <p>(022) 7300723</p>
                </button>
              </div>
              <div class="gambargambar">
                <img src={hotlinesuzuki} />
                <img src={mysuzuki} class="gambar2" />
              </div>
              <div class="copyrightbawah">
                <p>&copy; 2020 Suzuki Indonesia</p>
                <p class="line2">All rights reserved.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
