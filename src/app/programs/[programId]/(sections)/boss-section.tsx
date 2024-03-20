"use client";

import { motion } from "framer-motion";

export const BossSection = ({ data }: { data: any }) => {
  const { boss, desc } = data;

  return (
    <section>
      <div className="container flex flex-col justify-center items-center gap-10 md:flex-row">
        <div className="lg:w-1/2 md:w-2/3 w-full">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="mb-[20px] text-[22px] font-semibold leading-8 text-accent text-left md:text-[28px] lg:text-[32px]"
          >
            Руководитель программы
          </motion.h2>
          <p className="text-[20px]">{boss}</p>
          <div className="my-7 h-1 w-14 bg-accent" />
          <p className="text-[20px]">{desc}</p>
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
          className="lg:w-1/2 md:w-1/3 sm:w-1/2 w-full mx-auto overflow-hidden object-contain"
        />
      </div>
    </section>
  );
};
