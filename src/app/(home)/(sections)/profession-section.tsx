"use client";

import { ProfessionType } from "@/types/profession";
import { motion } from "framer-motion";

export const ProfessionSection = ({ data }: { data: ProfessionType }) => {
  const { title, list } = data;
  return (
    <section className="mt-[140px] overflow-hidden md:mt-[240px]">
      <div className="container flex flex-col justify-center gap-10 md:flex-row">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="mb-[40px] text-left text-[22px] font-semibold leading-8 text-accent md:text-[28px] lg:text-[32px]"
          >
            Перспективная профессия
          </motion.h2>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.7,
            }}
          >
            <p className="mb-[40px] text-[16px] font-semibold leading-6 md:mr-32 md:text-left md:text-[18px] md:leading-8 lg:text-[20px] laptop:text-[22px]">
              {title}
            </p>
            <p className="mb-[30px] text-[16px] leading-6 md:mr-20 md:text-[18px] md:leading-8 lg:text-[20px] laptop:text-[22px]">
              После выпуска вы сможете работать на таких позициях, как:
            </p>
            <ul className="list-disc">
              {list.map((item: any, index: number) => (
                <li
                  key={index}
                  className="ml-8 text-[16px] md:text-[18px] lg:text-[20px] laptop:text-[22px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          src="/lorem.png"
          alt="Profession"
          className="mx-auto w-full overflow-hidden object-contain sm:w-1/2 md:w-1/3 lg:w-1/2"
        />
      </div>
    </section>
  );
};
