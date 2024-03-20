import clsx from "clsx";
import { SlArrowRight } from "react-icons/sl";
import { useSwiper } from "swiper/react";

export const NextButton = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  return (
    <button
      className={clsx(
        "absolute md:right-4 right-0 top-1/2 z-[99] rounded-full p-2 text-[30px] transition md:hover:bg-secondary md:hover:text-accent block xl:-right-8",
        className,
      )}
      onClick={() => swiper.slideNext()}
    >
      <SlArrowRight />
    </button>
  );
};