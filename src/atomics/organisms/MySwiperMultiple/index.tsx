"use client";
import MySwiper from "@/bases/MySwiper";
import React from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

import { SwiperSlide } from "swiper/react";

type TMySwiperMultipleProps = {
  SlideItems?: React.ReactNode[];
};

const MySwiperMultiple: React.FC<TMySwiperMultipleProps> = (props) => {
  const { SlideItems = [] } = props;

  return (
    <MySwiper
      spaceBetween={30}
      slidesPerView={3}
      cssMode={true}
      loop={true}
      navigation={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {SlideItems.map((slideItem, index) => {
        return <SwiperSlide key={index}>{slideItem}</SwiperSlide>;
      })}
      {/* <SwiperSlide>
        <MyCardTutor />
      </SwiperSlide>
      <SwiperSlide>
        <MyCardTutor />
      </SwiperSlide>
      <SwiperSlide>
        <MyCardTutor />
      </SwiperSlide>
      <SwiperSlide>
        <MyCardTutor />
      </SwiperSlide>
      <SwiperSlide>
        <MyCardTutor />
      </SwiperSlide>
      <SwiperSlide>
        <MyCardTutor />
      </SwiperSlide>
      <SwiperSlide>
        <MyCardTutor />
      </SwiperSlide> */}
    </MySwiper>
  );
};

export default MySwiperMultiple;
