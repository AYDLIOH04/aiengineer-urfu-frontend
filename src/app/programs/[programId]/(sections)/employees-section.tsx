"use client";

import { DinamicSwiper } from "@/components/swiper";
import { motion } from "framer-motion";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const EmployeesSection = ({ data }: { data: any }) => {
  return (
    <section className="h-[800px]">
      <div className="container flex h-full flex-col items-center justify-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="mb-20 text-center text-[28px] font-semibold text-accent md:text-[40px] lg:text-[44px]"
        >
          Команда преподавателей
        </motion.h2>
        <div className="relative flex h-[550px] xl:w-[1200px] w-screen items-center justify-center">
          <DinamicSwiper>
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
    <div className="h-full w-full">
      <Image
        width={100}
        height={100}
        src="/lorem.png"
        alt="Boss"
        className="w-full object-contain"
      />
      <div className="px-4 mt-4">
        <h3 className="text-[18px] text-accent mb-4 font-semibold">
          {name.split(" ").slice(0, 2).join(" ")}
        </h3>
        <p className="text-[16px]">{desc}</p>
      </div>
    </div>
  );
};
