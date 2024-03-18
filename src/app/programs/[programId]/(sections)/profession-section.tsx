'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const ProfessionSection = ({ data }: any) => {
  const { title, list } = data;
  return (
    <section className="mt-[240px] overflow-hidden">
      <div className="container flex justify-center gap-10">
        <div>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.4,
            }}
            className="text-accent text-[44px] font-[600] mb-[40px]"
          >
            Перспективная профессия
          </motion.h2>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.7,
            }}
          >
            <p className="font-[600] text-[22px] mb-[40px] mr-32">{title}</p>
            <p className="text-[22px] mb-[30px] mr-20">
              После выпуска вы сможете работать на таких позициях, как:
            </p>
            <ul>
              {list.map((item: any, index: number) => (
                <li key={index} className="ml-8 text-[22px] list-disc">
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
            ease: 'easeOut',
          }}
          src="/lorem.png"
          alt="Profession"
          className="w-full overflow-hidden"
        />
      </div>
    </section>
  );
};
