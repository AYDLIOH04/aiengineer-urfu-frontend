import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { clsx } from "clsx";
import { useClickOutside } from "@/hooks";

export const ThemeSettings = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  const onOpenToggle = () => {
    setOpen(!open);
  };

  const onThemeSwitch = (theme: string) => {
    setOpen(false);
    setTheme(theme);
  };

  useClickOutside(() => setOpen(false), ref, open);

  return (
    <div ref={ref}>
      <li
        className={clsx(
          "dark:hover:bg-backgroundAccent relative flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full text-[28px] text-primary duration-200 hover:bg-foreground",
          { "dark:bg-backgroundAccent bg-foreground": open },
        )}
      >
        <IoSunnyOutline className="flex dark:hidden" onClick={onOpenToggle} />
        <IoMdMoon className="hidden dark:flex" onClick={onOpenToggle} />
      </li>
      {open && (
        <ul className="dark:bg-backgroundAccent absolute -bottom-40 right-0 rounded-md bg-foreground px-3 py-4 text-[16px] font-semibold">
          <li
            onClick={() => onThemeSwitch("light")}
            className="cursor-pointer py-2"
          >
            Светлый
          </li>
          <li
            onClick={() => onThemeSwitch("dark")}
            className="cursor-pointer py-2"
          >
            Темный
          </li>
          <li
            onClick={() => onThemeSwitch("system")}
            className="cursor-pointer py-2"
          >
            Системный
          </li>
        </ul>
      )}
    </div>
  );
};
