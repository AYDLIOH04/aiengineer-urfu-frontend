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
        "absolute left-0 top-1/2 z-[99] hidden rounded-full p-2 text-[30px] transition hover:bg-secondary hover:text-accent md:block xl:-left-16",
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
        "absolute right-0 top-1/2 z-[99] hidden rounded-full p-2 text-[30px] transition hover:bg-secondary hover:text-accent md:block xl:-right-16",
        className,
      )}
      onClick={() => swiper.slideNext()}
    >
      <SlArrowRight />
    </button>
  );
};
