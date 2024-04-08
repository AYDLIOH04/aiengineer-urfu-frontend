"use client";

import { SectionTitle } from "@/components";
import { Accordion } from "@/components/ui";
import { FaqType } from "@/types/faq";
import { motion } from "framer-motion";

export const FaqSection = ({ data }: { data: FaqType[] }) => {
  return (
    <section className="mt-20">
      <div className="container">
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>
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
                <div className="overflow-hidden pb-10 text-[16px] font-light md:text-[18px] lg:text-[20px]">
                  {item.body}
                </div>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
