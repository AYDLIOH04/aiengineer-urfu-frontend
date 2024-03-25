"use client";

import { useScrollOffset } from "@/hooks";
import Image from "next/image";
import { Menu } from "./menu";
import { Navbar } from "./navbar";
import clsx from "clsx";
import { TranslatorSettings } from "./translator";
import { ThemeSettings } from "./themes";

export const Header = () => {
  const scrolled = useScrollOffset(80);

  return (
    <header
      className={clsx("fixed left-0 right-0 top-0 z-[50] h-[60px] bg-header", {
        "shadow-md": scrolled,
      })}
    >
      <div className="header-container">
        <nav className="flex items-center justify-between">
          <Image
            priority
            className="my-[5px]"
            src="/logo-irit-rtf.png"
            alt="IRIT-RTF Logo"
            width={86}
            height={50}
          />
          <Navbar />
          <div className="flex gap-2">
            <ul className="relative z-[51] flex items-center justify-center gap-2">
              {/* <TranslatorSettings /> */}
              <ThemeSettings />
            </ul>
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
};
