import { headerLinks } from "@/constants";
import { scrollToId } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useClickOutside, useEscapeKeydown } from "@/hooks";
import { useRef } from "react";
import { useTheme } from "next-themes";

export const MenuNavbar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { theme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const onLinkClick = (href: string) => {
    onClose();
    scrollToId(href);
  };

  useClickOutside(onClose, menuRef, open);
  useEscapeKeydown(onClose, open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: 400 }}
          transition={{
            duration: 0.5,
          }}
          className="fixed right-0 top-0 z-[50] h-full w-2/3 bg-accent text-secondary dark:bg-backgroundAccent md:w-[350px]"
        >
          <div className="flex h-[100vh] flex-col items-center justify-between gap-10 py-20">
            <div className="mx-4 text-center">
              <Link href="/" className="cursor-pointer text-[20px] font-[400]">
                Все программы
              </Link>
              <div className="my-4 h-0.5 w-full bg-secondary" />
              <ul className="flex flex-col gap-5">
                {headerLinks.map((link) => (
                  <a
                    key={link.id}
                    className="cursor-pointer text-[20px] font-[400]"
                    onClick={() => onLinkClick(link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </ul>
            </div>
            <Image
              width={200}
              height={200}
              src="/rtf-logo-dark.svg"
              alt="IRIT-RTF Logo"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
