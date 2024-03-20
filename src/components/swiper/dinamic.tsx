"use client";

import { Swiper } from "swiper/react";
import { PrevButton } from "./prev-button";
import { NextButton } from "./next-button";
import "swiper/css";
import "swiper/css/navigation";

export const DinamicSwiper = ({
  children,
  countSlides = 4,
}: {
  children: React.ReactNode;
  countSlides?: number;
}) => {
  return (
    <Swiper
      loop
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{
        576: {
          slidesPerView: Math.max(countSlides - 3, 1),
        },
        768: {
          slidesPerView: Math.max(countSlides - 2, 1),
        },
        1024: {
          slidesPerView: Math.max(countSlides - 1, 1),
        },
        1400: {
          slidesPerView: countSlides,
        },
      }}
      pagination={{ clickable: true }}
      className="dinamic-swiper"
    >
      <PrevButton className="left-0 text-accent" />
      {children}
      <NextButton className="right-0 text-accent" />
    </Swiper>
  );
};
