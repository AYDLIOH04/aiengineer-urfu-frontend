"use client";

import { DinamicSwiper, SectionTitle } from "@/components";
import { ReviewType } from "@/types/review";
import clsx from "clsx";
import { SwiperSlide } from "swiper/react";

export const ReviewsSection = ({ data }: { data: ReviewType[] }) => {
  return (
    <section className="mt-[120px] flex h-[600px] items-center justify-center">
      <div className="container flex flex-col items-center justify-center">
        <SectionTitle>Отзывы студентов и выпускников</SectionTitle>
        <div className="relative flex min-h-[250px] w-screen cursor-grab md:w-full">
          <DinamicSwiper
            smSlidesPerView={1}
            mdSlidesPerView={1}
            lgSlidesPerView={2}
            xlSlidesPerView={2}
          >
            {data.map((item: ReviewType, index: number) => (
              <SwiperSlide key={item.id}>
                <ReviewsSlide review={item} index={index} />
              </SwiperSlide>
            ))}
          </DinamicSwiper>
        </div>
      </div>
    </section>
  );
};

const ReviewsSlide = ({ review, index }: any) => {
  const { author, role, message } = review;
  return (
    <div
      className={clsx(
        "mx-auto h-full w-full rounded-xl px-4 py-8 text-secondary dark:text-backgroundAccent sm:w-auto md:px-8",
        index % 2 === 0 ? "bg-accent" : "bg-orange",
      )}
    >
      <h4 className="relative inline text-[25px] font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-auto after:rounded-md after:bg-white/50 dark:after:bg-backgroundAccent">
        {author}
      </h4>
      <p className="mb-4 mt-1 text-[18px]">{role}</p>
      <p className="text-[15px]">{message}</p>
    </div>
  );
};
