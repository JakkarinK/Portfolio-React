import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.scss";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Box, Container, Typography } from "@mui/material";

const CarouselEdu = () => {
  const eduList = [
    {
      title: "Suankularb Witayalai Rangsit",
      date: "2014 - 2020",
      class: "Science and Mathematics",
      locate: "Pathumthani, 12120",
    },
    {
      title: "Thammarsart Rangsit University",
      date: "2020 - 2024",
      class: "Software Engineer",
      locate: "Pathumthani, 12120",
    },
  ];

  return (
    <>
      <Container>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="swiper-edu"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://swiperjs.com/demos/images/nature-1.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          {eduList.map((edu) => (
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                <Typography variant="h5">{edu.title}</Typography>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <Typography variant="caption">{edu.date}</Typography>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <Typography variant="body1">{edu.class}</Typography>
                <Typography variant="body1">{edu.locate}</Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default CarouselEdu;
