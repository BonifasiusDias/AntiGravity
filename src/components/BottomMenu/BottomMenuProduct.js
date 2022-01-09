import "./BottomMenuProduct.css";
import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
const BottomMenuProduct = () => {
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Handphone, setHandphone] = useState("");
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div class="bottommenudiv">
        <button onClick={() => setOpenModal(true)}>Booking Mobil</button>
        <div class="whatsapp"></div>
        <div class="simulasi"></div>
      </div>
      {openModal ? (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <XIcon onClick={() => setOpenModal(false)} class="closeicon" />
            <div class="isimodal">
              <div class="judul">
                <h2>Booking Mobil</h2>
              </div>
              <div>
                <form className="">
                  <label className="text-base" htmlFor="Email Address">
                    Nama Lengkap
                  </label>
                  <input
                    onChange={(e) => setNama(e.target.value)}
                    id="email"
                    type="text"
                  />
                </form>
              </div>
              <div>
                <form className="flex flex-col">
                  <label className="text-base" htmlFor="Email Address">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="text"
                  />
                </form>
              </div>
              <div>
                <form className="flex flex-col">
                  <label className="text-base" htmlFor="Email Address">
                    No Handphone
                  </label>
                  <input
                    onChange={(e) => setHandphone(e.target.value)}
                    id="email"
                    type="number"
                  />
                </form>
              </div>
              <div class="dropdownpicker"></div>
            </div>
            <div class="tombolbawah">
              <button onClick={() => setOpenModal(false)} class="batal">
                Batal
              </button>
              <button class="kirim">Kirim</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BottomMenuProduct;
