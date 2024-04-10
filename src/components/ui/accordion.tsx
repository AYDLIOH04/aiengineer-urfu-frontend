"use client";

import clsx from "clsx";
import { useState } from "react";
import { PiPlusLight } from "react-icons/pi";

export const Accordion = ({
  title,
  children,
  size,
}: {
  title: string;
  children: React.ReactNode;
  size?: "sm" | "lg";
}) => {
  const [open, setOpen] = useState(false);

  const onOpenToggle = () => {
    setOpen((curr) => !curr);
  };

  let sizeStyles = open
    ? "max-h-[1000px] duration-[1750ms]"
    : "max-h-0 duration-[500ms]";

  if (size === "lg") {
    sizeStyles = open
      ? "max-h-[1800px] duration-[1500ms]"
      : "max-h-0 duration-[500ms]";
  }

  return (
    <>
      <div
        className="group flex flex-row items-center justify-between py-2 md:py-5"
        onClick={onOpenToggle}
      >
        <h3 className="text-[20px] font-light md:text-[22px] lg:text-[24px]">
          {title}
        </h3>
        <div className="cursor-pointer rounded-full p-1 duration-300 group-hover:bg-foreground dark:group-hover:bg-backgroundAccent">
          <PiPlusLight
            size={35}
            className={clsx("transform duration-300", { "-rotate-45": open })}
          />
        </div>
      </div>
      <div className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-full after:rounded-md after:bg-accent">
        <div className={clsx("overflow-hidden ease-out", sizeStyles)}>
          {children}
        </div>
      </div>
    </>
  );
};
