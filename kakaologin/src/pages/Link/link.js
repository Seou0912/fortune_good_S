import React from "react";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
import LinkComponent from "./components/Link/link"; // Import LinkComponent from link.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  // 슬라이더 설정
    // 설정 내용
    const settings = {
        dots: true, // 슬라이더 하단에 점 표시 여부
        infinite: true, // 무한 반복 여부
        speed: 500, // 슬라이드 전환 속도 (밀리초)
        slidesToShow: 3, // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1, // 슬라이드 이동 시 넘어가는 슬라이드의 개수
        autoplay: true, // 자동 재생 여부
        autoplaySpeed: 2000, // 자동 재생 시 슬라이드 전환 속도 (밀리초)
        pauseOnHover: true, // 마우스 호버 시 자동 재생 일시정지 여부
        arrows: true, // 좌우 화살표 사용 여부
        responsive: [ // 반응형 설정
          {
            breakpoint: 1024, // 화면 크기
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
  };

  return (
    <Slider {...settings}>
      <div>
        <LinkComponent to="/todays-message">오늘의 메시지</LinkComponent>{" "}
        {/* Use LinkComponent from link.js */}
      </div>
      <div>
        <LinkComponent to="/constellation">별자리 운세</LinkComponent>
      </div>
      <div>
        <LinkComponent to="/zodiac">띠별 운세</LinkComponent>
      </div>
    </Slider>
  );
};

export default SlideShow;
