import React from "react";
import Slider from "react-slick";

function ProductCarousel({ images }) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="slider-container w-50">
      {images && images.length > 1 ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="p-2 d-flex justify-content-center align-items-center"
            >
              <img
                src={image}
                alt={`product-${index}`}
                style={{ width: "300px", height: "300px", objectFit: "contain" }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="p-2 d-flex justify-content-center align-items-center">
          <img
            src={images}
            alt="product-single"
            style={{ width: "300px", height: "300px", objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
}

export default ProductCarousel;
