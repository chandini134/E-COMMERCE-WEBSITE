import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/shopping.jpg" alt="Slide 1"  height={"400px"}  width={"100%"}/>
        </div>
        <div>
          <img src="/couple_shopping.jpg" alt="Slide 2" height={"400px"}  width={"100%"} />
        </div>
        <div>
          <img src="//home/chandini/e-commerce website/E-commerce-website/public/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.avif" alt="Slide 2" height={"400px"}  width={"100%"} />
        </div>
        
        
      </Slider>
    </div>
  );
}

export default Carousel;
