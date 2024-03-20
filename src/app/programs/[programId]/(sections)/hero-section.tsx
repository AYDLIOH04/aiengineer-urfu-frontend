"use client";

import { Button } from "@/components/ui";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToId } from "@/utils";

const hInfoStyles = "mb-3 laptop:text-[28px] text-[24px] font-semibold";
const pInfoStyles = "laptop:text-[22px] text-[16px]";

export const HeroSection = ({ data }: { data: any }) => {
  const { title, mags, learn, direction, format, duration, places } = data;
  return (
    <section className="full-screen relative flex overflow-hidden bg-accent text-secondary">
      <Image
        src="/hero-section.jpg"
        alt="Hero Image"
        className="absolute h-full w-full object-cover object-right opacity-30"
        priority
        width={1920}
        height={1080}
      />
      <div className="z-10 h-full w-full">
        <div className="full-screen container flex h-full flex-col items-center justify-between gap-20 py-[80px] md:py-[120px]">
          <div className="w-full">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-8 max-w-[900px] text-[30px] font-semibold leading-[2.3rem] md:text-[40px] md:leading-[3rem] laptop:mb-[60px] laptop:text-[50px] laptop:leading-[4rem]"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 0.4, ease: "easeOut", delay: 0.5 },
                opacity: { duration: 0.5, ease: "easeIn", delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <p className="mb-[50px] max-w-[700px] text-[18px] font-semibold leading-[1.8rem] md:text-[24px] md:leading-[2.5rem] laptop:text-[30px]">
                {mags}
              </p>
              <p className="mb-[65px] text-[18px] font-normal md:text-[24px] laptop:text-[30px]">
                {learn}
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button onClick={() => scrollToId("#enter-institute")}>
                Как поступить?
              </Button>
            </motion.div>
          </div>
          <div className="px-3">
            <ul className="grid w-full gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
              <li>
                <h3 className={hInfoStyles}>{direction.id}</h3>
                <p className={pInfoStyles}>
                  направление подготовки «{direction.desc}»
                </p>
              </li>
              <li className="md:text-right lg:text-left">
                <h3 className={hInfoStyles}>{format}</h3>
                <p className={pInfoStyles}>Форма обучения</p>
              </li>
              <li>
                <h3 className={hInfoStyles}>{duration}</h3>
                <p className={pInfoStyles}>срок обучения</p>
              </li>
              <li className="md:text-right lg:text-left">
                <h3 className={hInfoStyles}>{places} мест</h3>
                <p className={pInfoStyles}>На бюджентой основе</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
