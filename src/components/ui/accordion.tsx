"use client";

import clsx from "clsx";
import { useState } from "react";
import { PiPlusLight } from "react-icons/pi";

export const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const onOpenToggle = () => {
    setOpen((curr) => !curr);
  };

  return (
    <>
      <div
        className="group flex flex-row items-center justify-between py-2 md:py-5"
        onClick={onOpenToggle}
      >
        <h3 className="text-[20px] font-light md:text-[22px] lg:text-[24px]">
          {title}
        </h3>
        <div className="dark:group-hover:bg-backgroundAccent cursor-pointer rounded-full p-1 duration-300 group-hover:bg-foreground">
          <PiPlusLight
            size={35}
            className={clsx("transform duration-300", { "-rotate-45": open })}
          />
        </div>
      </div>
      <div className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-full after:rounded-md after:bg-accent">
        <div
          className={clsx("overflow-hidden ease-out", {
            "max-h-0 duration-[500ms]": !open,
            "max-h-[1000px] duration-[1750ms] ": open,
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};
