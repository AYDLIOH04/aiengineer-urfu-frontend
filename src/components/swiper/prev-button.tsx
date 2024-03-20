import clsx from "clsx";
import { SlArrowLeft } from "react-icons/sl";
import { useSwiper } from "swiper/react";

export const PrevButton = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  return (
    <button
      className={clsx(
        "absolute md:left-4 top-1/2 z-[99] rounded-full p-2 text-[30px] transition md:hover:bg-secondary md:hover:text-accent block xl:-left-8",
        className,
      )}
      onClick={() => swiper.slidePrev()}
    >
      <SlArrowLeft />
    </button>
  );
};

