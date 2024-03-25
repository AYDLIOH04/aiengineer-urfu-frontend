"use client";

type DinamicSwiperProps = SwiperProps & {
  children: React.ReactNode;
  smSlidesPerView?: number;
  mdSlidesPerView?: number;
  lgSlidesPerView?: number;
  xlSlidesPerView?: number;
};

import { Swiper, SwiperProps } from "swiper/react";
import { PrevButton } from "./prev-button";
import { NextButton } from "./next-button";
import "swiper/css";
import "swiper/css/navigation";

export const DinamicSwiper = ({
  children,
  smSlidesPerView,
  mdSlidesPerView,
  lgSlidesPerView,
  xlSlidesPerView,
  ...props
}: DinamicSwiperProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{
        576: {
          slidesPerView: smSlidesPerView,
        },
        768: {
          slidesPerView: mdSlidesPerView,
        },
        1024: {
          slidesPerView: lgSlidesPerView,
        },
        1400: {
          slidesPerView: xlSlidesPerView,
        },
      }}
      pagination={{ clickable: true }}
      className="dinamic-swiper"
      {...props}
    >
      <PrevButton className="left-0 text-accent dark:hover:bg-accent dark:hover:text-background" />
      {children}
      <NextButton className="right-0 text-accent dark:hover:bg-accent dark:hover:text-background" />
    </Swiper>
  );
};
