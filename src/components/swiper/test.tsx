import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PrevButton } from "./prev-button";
import { NextButton } from "./next-button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const TestSwiper = ({
  children,
  onActiveIndexChange,
}: {
  children: React.ReactNode;
  onActiveIndexChange: any;
}) => {
  return (
    <Swiper
      onActiveIndexChange={(swiper) => onActiveIndexChange(swiper)}
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <PrevButton />
      {children}
      <NextButton />
    </Swiper>
  );
};
