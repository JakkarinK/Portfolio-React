import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./carousel.scss";

import P1 from "../../assets/img/profile/p1.jpg";
import P2 from "../../assets/img/profile/p2.jpg";
import P3 from "../../assets/img/profile/p3.jpg";
import P4 from "../../assets/img/profile/p4.png";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const profileImg = [P1, P2, P3, P4];
  console.log(profileImg);
  return (
    <>
      <Swiper
        effect={"cube"}
        loop={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="swiper-profile"
      >
        <SwiperSlide>
          <img src={P1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
