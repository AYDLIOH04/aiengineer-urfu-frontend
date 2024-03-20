import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useSwiper } from "swiper/react";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const DefaultSwiper = ({
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

const PrevButton = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  return (
    <button
      className={clsx(
        "absolute md:left-4 top-1/2 z-[99] rounded-full p-2 text-[30px] transition md:hover:bg-secondary md:hover:text-accent block xl:-left-16",
        className,
      )}
      onClick={() => swiper.slidePrev()}
    >
      <SlArrowLeft />
    </button>
  );
};

const NextButton = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  return (
    <button
      className={clsx(
        "absolute md:right-4 right-0 top-1/2 z-[99] rounded-full p-2 text-[30px] transition md:hover:bg-secondary md:hover:text-accent block xl:-right-16",
        className,
      )}
      onClick={() => swiper.slideNext()}
    >
      <SlArrowRight />
    </button>
  );
};
