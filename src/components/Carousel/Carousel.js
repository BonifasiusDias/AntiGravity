import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import gambar from "../../assets/Carousel.png";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div class="nextarrow">
      <button onClick={onClick}>
        <ChevronRightIcon class="icon" />
      </button>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div class="prevarrow">
      <button onClick={onClick}>
        <ChevronLeftIcon class="icon" />
      </button>
    </div>
  );
}

const CarouselComponent = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    beforeChange: function (current, next) {},
  };

  return (
    <div class="carousel">
      <div>
        <Slider {...settings}>
          <div>
            <img src={gambar} alt="" />
          </div>
          <div>
            <img src={gambar} alt="" />
          </div>
          <div>
            <img src={gambar} alt="" />
          </div>
          <div>
            <img src={gambar} alt="" />
          </div>
          <div>
            <img src={gambar} alt="" />
          </div>
          <div>
            <img src={gambar} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
