import gambarPromo from "../../assets/gambarPromo.png";
import "./InformationCard.css";
const informationCard = ({ date, title }) => {
  return (
    <div class="card">
      <img src={gambarPromo}></img>
      <div class="text">
        <p>{date}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default informationCard;
