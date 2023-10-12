import Slider from "react-slick";

import "./slickarrow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg1 from "../../../assets/images/banner_img1.png";
import bannerImg2 from "../../../assets/images/banner_img2.png";
import bannerImg3 from "../../../assets/images/banner_img3.jpg";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  className: "slides",
};

const Banner = () => {
  return (
    <Slider {...settings} style={{ width: "30%" }}>
      <a
        href="https://www.shinhansec.com/event2/230701_feeEvent/event.jsp"
        target="_blank"
        rel="noreferrer"
      >
        <img className="size" src={bannerImg1} alt="배너1" />
      </a>
      <a
        href="https://www.shinhansec.com/event2/230922_etnEvent/event.jsp"
        target="_blank"
        rel="noreferrer"
      >
        <img className="size" src={bannerImg2} alt="배너2" />
      </a>
      <a href="https://www.shinhansec.com/" target="_blank" rel="noreferrer">
        <img className="size" src={bannerImg3} alt="배너3" />
      </a>
    </Slider>
  );
};

export default Banner;
