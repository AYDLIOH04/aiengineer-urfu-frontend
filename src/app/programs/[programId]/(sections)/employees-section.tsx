"use client";

import { SectionTitle, DinamicSwiper } from "@/components";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const EmployeesSection = ({ data }: { data: any }) => {
  return (
    <section className="h-[800px]">
      <div className="container flex h-full flex-col items-center justify-center">
        <SectionTitle>Команда преподавателей</SectionTitle>
        <div className="relative flex h-[550px] w-screen cursor-grab items-center justify-center xl:w-[1200px]">
          <DinamicSwiper
            loop
            smSlidesPerView={1}
            mdSlidesPerView={2}
            lgSlidesPerView={3}
            xlSlidesPerView={4}
          >
            {data?.map((item: any, itemIndex: number) => (
              <SwiperSlide key={itemIndex}>
                <EmployeeSlide data={item} />
              </SwiperSlide>
            ))}
          </DinamicSwiper>
        </div>
      </div>
    </section>
  );
};

const EmployeeSlide = ({ data }: { data: any }) => {
  const { name, desc } = data;
  return (
    <div className="h-full w-full select-none">
      <Image
        width={100}
        height={100}
        src="/lorem.png"
        alt="Boss"
        className="w-full object-contain"
      />
      <div className="mt-4 px-4">
        <h3 className="mb-4 text-[18px] font-semibold text-accent">
          {name.split(" ").slice(0, 2).join(" ")}
        </h3>
        <p className="text-[14px]">{desc}</p>
      </div>
    </div>
  );
};
