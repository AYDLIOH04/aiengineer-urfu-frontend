"use client";

import { DinamicSwiper, SectionTitle } from "@/components";
import { SwiperSlide } from "swiper/react";

export const ReviewsSection = ({ data }: { data: any }) => {
  return (
    <section className="flex h-[600px] items-center justify-center mt-[120px]">
      <div className="container flex flex-col items-center justify-center">
        <SectionTitle>Отзывы студентов и выпускников</SectionTitle>
        <div className="relative min-h-[250px] md:w-full w-screen flex cursor-grab">
          <DinamicSwiper
            smSlidesPerView={1}
            mdSlidesPerView={1}
            lgSlidesPerView={2}
            xlSlidesPerView={2}
          >
            {data.map((item: any, indexItem: number) => (
              <SwiperSlide key={indexItem} className="odd:bg-accent even:bg-orange rounded-xl">
                <ReviewsSlide review={item} />
              </SwiperSlide>
            ))}
          </DinamicSwiper>
        </div>
      </div>
    </section>
  );
};

const ReviewsSlide = ({ review }: any) => {
  const { author, role, message } = review;
  return (
    <div className="mx-auto h-full w-full px-4 py-8 text-secondary sm:w-auto md:px-8">
      <h4 className="relative inline text-[25px] font-semibold after:absolute after:-bottom-1 after:left-2 after:right-2 after:h-0.5 after:w-auto after:rounded-md after:bg-white/50">
        {author}
      </h4>
      <p className="mb-4 mt-1 text-[18px]">{role}</p>
      <p className="text-[15px]">{message}</p>
    </div>
  );
};
