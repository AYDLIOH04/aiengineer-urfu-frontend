"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const AboutSection = ({ data }: any) => {
  return (
    <section className="mt-[80px]" id="about">
      <div className="container">
        <h2 className="text-center text-[28px] font-semibold text-accent md:text-[40px] lg:text-[44px]">
          О программе
        </h2>
        <ul className="mt-[80px] grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20 xl:grid-cols-3">
          {data.map((item: any, index: number) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col gap-5"
            >
              <Image
                width={55}
                height={55}
                src={`/about/about-${index + 1}.svg`}
                alt={item.title}
              />
              <h3 className="text-[20px] font-semibold text-accent md:text-[22px]">
                {item.title}
              </h3>
              <p>{item.body}</p>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
};
