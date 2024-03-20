"use client";

import { motion } from "framer-motion";

export const BossSection = ({ data }: { data: any }) => {
  const { name, desc } = data;

  return (
    <section id="employees" className="py-[100px]">
      <div className="container flex flex-col items-center justify-center gap-10 md:flex-row">
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
            className="mb-[20px] text-left text-[22px] font-semibold leading-8 text-accent md:text-[28px] lg:text-[32px]"
          >
            Руководитель программы
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.7,
            }}
            className="text-[20px]"
          >
            {name}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 1.2,
            }}
            className="my-7 h-1 w-14 bg-accent"
          />
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1,
            }}
            className="text-[16px]"
          >
            {desc}
          </motion.p>
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
          alt="Boss"
          className="mx-auto w-full overflow-hidden object-contain sm:w-1/2 md:w-1/3 lg:w-1/2"
        />
      </div>
    </section>
  );
};
