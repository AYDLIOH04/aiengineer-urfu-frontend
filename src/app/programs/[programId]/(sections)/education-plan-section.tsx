"use client";

import { Accordion } from "@/components/accordion";
import { motion } from "framer-motion";

export const EducationPlanSection = ({ data }: { data: any }) => {
  return (
    <section id="plan" className="mt-20">
      <div className="container">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center text-[28px] font-semibold text-accent md:text-[40px] lg:text-[44px]"
        >
          Учебный план
        </motion.h2>
        
        <div className="mt-20 mx-auto max-w-[840px] relative before:absolute before:top-0 before:left-0 before:rounded-md before:right-0 before:h-0.5 before:w-full before:bg-accent">
          {data.map(({ title, list }: { title: string; list: string[] }) => (
            <Accordion key={title} title={title} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
};
