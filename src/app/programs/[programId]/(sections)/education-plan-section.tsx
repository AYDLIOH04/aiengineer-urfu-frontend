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

        <div className="relative mx-auto mt-20 max-w-[840px] before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:w-full before:rounded-md before:bg-accent">
          {data.map((item: any, itemIndex: number) =>
            (
              <Accordion
                key={itemIndex}
                title={item.title}
                list={item.list}
                animateIndex={itemIndex}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};
