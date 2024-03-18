'use client';

import { Button } from '@/components/ui';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroSection = ({ data }: any) => {
  const { title, mags, learn, direction, format, duration, places } = data;
  return (
    <section className="relative full-screen bg-accent text-secondary flex overflow-hidden">
      <Image
        src="/hero-section.jpg"
        alt="Hero Image"
        className="opacity-30 absolute w-full h-full object-cover"
        priority
        width={1920}
        height={1080}
      />
      <div className="z-10 w-full h-full">
        <div className="container py-[120px] h-full full-screen flex flex-col justify-center items-center gap-20">
          <div className="w-full">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-[60px] text-[50px] font-[600] leading-[4rem] max-w-[900px]"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 0.4, ease: 'easeOut', delay: 0.5 },
                opacity: { duration: 0.5, ease: 'easeIn', delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <p className="mb-[50px] text-[30px] font-[600] leading-[2.5rem] max-w-[700px]">
                {mags}
              </p>
              <p className="mb-[65px] text-[30px] font-[400]">{learn}</p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button>Как поступить?</Button>
            </motion.div>
          </div>
          <div>
            <ul className="flex flex-row gap-4">
              <li className="w-1/4">
                <h3 className="font-[600] text-[28px] mb-3">{direction.id}</h3>
                <p className="text-[22px]">
                  направление подготовки «{direction.desc}»
                </p>
              </li>
              <li className="w-1/4">
                <h3 className="font-[600] text-[28px] mb-3">{format}</h3>
                <p className="text-[22px]">Форма обучения</p>
              </li>
              <li className="w-1/4">
                <h3 className="font-[600] text-[28px] mb-3">{duration}</h3>
                <p className="text-[22px]">срок обучения</p>
              </li>
              <li className="w-1/4">
                <h3 className="font-[600] text-[28px] mb-3">{places} мест</h3>
                <p className="text-[22px]">На бюджентой основе</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
