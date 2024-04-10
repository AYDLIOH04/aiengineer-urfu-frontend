"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components";
import {
  EaselIcon,
  GrandIcon,
  ManIcon,
  PeopleIcon,
  RubleIcon,
  StudentIcon,
} from "@/components/svg";
import { AboutType } from "@/types/about";

const AboutIcons = [
  PeopleIcon,
  EaselIcon,
  GrandIcon,
  StudentIcon,
  ManIcon,
  RubleIcon,
];

export const AboutSection = ({ data }: { data: AboutType[] }) => {
  return (
    <section className="mt-20" id="about">
      <div className="container">
        <SectionTitle>О программе</SectionTitle>
        <ul className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20 xl:grid-cols-3">
          {data.map((item: AboutType, index: number) => {
            const AboutIcon = AboutIcons[index];

            return (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.15 * index,
                }}
                viewport={{ once: true }}
                key={item.id}
                className="flex flex-col gap-5"
              >
                <AboutIcon className="text-[50px]" />
                <h3 className="text-[20px] font-semibold text-accent md:text-[22px]">
                  {item.title}
                </h3>
                <p>{item.body}</p>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
