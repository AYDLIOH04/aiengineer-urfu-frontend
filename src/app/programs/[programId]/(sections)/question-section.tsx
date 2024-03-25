"use client";

import { SectionTitle } from "@/components";
import { ContactForm } from "@/components/form/contact-form";
import { VkIcon } from "@/components/svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

export const QuestionSection = ({ data }: { data: any }) => {
  return (
    <section id="question" className="my-[170px]">
      <div className="container">
        <SectionTitle>Задать вопрос</SectionTitle>
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:gap-2 lg:text-start">
          <div className="md:w-1/2">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-[24px] text-accent md:text-[28px] lg:text-[32px]"
            >
              {data.telephone}
            </motion.p>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="mb-10 text-[24px] text-accent md:text-[28px] lg:text-[32px]"
            >
              {data.email}
            </motion.p>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="text-[16px] md:text-[20px]"
            >
              {data.address}
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.7,
              }}
              viewport={{ once: true }}
              className="mt-4 flex flex-row justify-center gap-3 lg:justify-start"
            >
              <Link
                href={data.telegramLink}
                target="_blank"
                className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-accent duration-200 hover:opacity-80 dark:text-foreground"
              >
                <FaTelegramPlane className="text-[26px] text-secondary" />
              </Link>
              <Link
                href={data.vkLink}
                target="_blank"
                className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-accent duration-200 hover:opacity-80 dark:text-foreground"
              >
                <VkIcon className="text-[26px] text-secondary" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.8,
            }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
