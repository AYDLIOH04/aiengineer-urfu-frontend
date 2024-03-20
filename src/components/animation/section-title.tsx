"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h2
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className={clsx(
        "mb-20 text-center text-[28px] font-semibold text-accent md:text-[40px] lg:text-[44px]",
        className,
      )}
    >
      {children}
    </motion.h2>
  );
};
