import gambarOutlet from "../../assets/GambarOutlet.png";
import "./HomeDealerCard.css";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const HomeDealerCard = ({ service, phone, title, location }) => {
  return (
    <div class="card">
      <img src={gambarOutlet} />
      <div class="text">
        <p class="service">{service}</p>
        <h>{title}</h>
        <div class="desc">
          <PhoneIcon class="icon1" />
          <p class="phone">{phone}</p>
        </div>
        <div class="desc">
          <LocationMarkerIcon class="icon2" />
          <p class="location">{location}</p>
        </div>
      </div>
      <Link to="/outlet">
        <div class="button">
          <button>Kunjungi Website Outlet</button>
        </div>
      </Link>
    </div>
  );
};

export default HomeDealerCard;
