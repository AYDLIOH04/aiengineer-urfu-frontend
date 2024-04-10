"use client";

import { useScrollOffset } from "@/hooks";
import Image from "next/image";
import { Menu } from "./menu";
import { Navbar } from "./navbar";
import clsx from "clsx";
import { AdminDashboard } from "./admin";
import { ThemeSettings } from "./themes";
import { useTheme } from "next-themes";
import Link from "next/link";

export const Header = () => {
  const { theme } = useTheme();
  const scrolled = useScrollOffset(80);

  return (
    <header
      className={clsx("fixed left-0 right-0 top-0 z-[50] h-[60px] bg-header", {
        "shadow-md": scrolled,
      })}
    >
      <div className="header-container">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              priority
              className="my-[5px] hidden dark:flex"
              src="/rtf-logo-dark.svg"
              alt="IRIT-RTF Logo"
              width={86}
              height={50}
            />
            <Image
              priority
              className="my-[5px] flex dark:hidden"
              src="/rtf-logo-light.svg"
              alt="IRIT-RTF Logo"
              width={86}
              height={50}
            />
          </Link>
          <Navbar />
          <div className="flex gap-2">
            <ul className="relative z-[51] flex items-center justify-center gap-2">
              <ThemeSettings />
              <Link href={"/dashboard"}>
                <AdminDashboard />
              </Link>
            </ul>
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
};
