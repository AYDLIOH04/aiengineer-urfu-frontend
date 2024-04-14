"use client";

import { EnterInstituteType } from "@/types/enter";
import { motion } from "framer-motion";

export const VerticalLine = ({ list }: { list: EnterInstituteType[] }) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="mx-auto flex max-w-[1000px] flex-col gap-4"
    >
      {list.map(({ title, body, id }, itemIndex: number) => (
        <li
          key={itemIndex}
          className="timelime-mobile relative min-h-20 w-full before:absolute before:top-0 before:h-[135%] before:w-0.5 before:bg-accent after:absolute after:top-2 after:h-6 after:w-6 after:rounded-full after:border-2 after:border-background after:bg-orange first:before:top-3 last:before:h-0 md:w-1/2 md:before:h-[155%] md:odd:self-start md:odd:pr-10 md:odd:text-end md:odd:before:right-0 md:odd:after:-right-[11px] md:even:self-end md:even:pl-10 md:even:text-start md:even:before:-left-[2px] md:even:after:-left-[13px]"
        >
          <motion.div
            initial={{
              x: itemIndex % 2 === 1 ? 100 : -100,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4 + itemIndex * 0.15,
            }}
            className="pl-8 md:pl-0"
          >
            <h3 className="mb-2 text-[18px] font-semibold text-accent md:text-[20px]">
              {title}
            </h3>
            <p className="text-[14px] md:text-[16px]">{body}</p>
          </motion.div>
        </li>
      ))}
    </motion.ul>
  );
};
