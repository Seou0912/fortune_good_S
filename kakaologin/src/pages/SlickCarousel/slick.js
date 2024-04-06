import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideUrls = [
    { url: "/todays-message", title: "오늘의 메시지" },
    { url: "/constellation", title: "별자리 운세" },
    { url: "/zodiac", title: "띠별 운세" },
  ];

  return (
    <Slider {...settings}>
      {slideUrls.map((slide, index) => (
        <div key={index} onClick={() => (window.location.href = slide.url)}>
          <h3>{slide.title}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default SlideShow;
