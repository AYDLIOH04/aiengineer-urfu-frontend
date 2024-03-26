"use client";

import { SectionTitle } from "@/components";
import { Accordion } from "@/components/ui";
import { motion } from "framer-motion";

export const EducationPlanSection = ({ data }: { data: any }) => {
  return (
    <section id="plan" className="mt-20">
      <div className="container">
        <SectionTitle>Учебный план</SectionTitle>
        <div className="relative mx-auto mt-20 max-w-[840px] before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:w-full before:rounded-md before:bg-accent">
          {data.map((item: any, itemIndex: number) => (
            <motion.div
              key={itemIndex}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2 * (itemIndex + 1),
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Accordion title={item.title}>
                <ul className="list-disc overflow-hidden pb-10 pl-8 text-[16px] font-light duration-1000 md:text-[20px] lg:text-[22px]">
                  {item.list.map((listItem: any, listItemIdex: number) => (
                    <li key={listItemIdex}>{listItem}</li>
                  ))}
                </ul>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
