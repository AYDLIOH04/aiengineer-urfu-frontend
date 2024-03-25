import { headerLinks } from '@/constants';
import { scrollToId } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useClickOutside, useEscapeKeydown } from '@/hooks';
import { useRef } from 'react';

export const MenuNavbar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
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
          className="fixed right-0 top-0 bg-accent dark:bg-backgroundAccent text-secondary md:w-[350px] z-[50] w-2/3 h-full"
        >
          <div className="py-20 flex flex-col gap-10 justify-between items-center h-[100vh]">
            <div className="mx-4 text-center">
              <Link href="/" className="text-[20px] font-[400] cursor-pointer">
                Все программы
              </Link>
              <div className="w-full h-0.5 bg-secondary my-4" />
              <ul className="flex flex-col gap-5">
                {headerLinks.map((link) => (
                  <a
                    key={link.id}
                    className="text-[20px] font-[400] cursor-pointer"
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
              src="/logo-irit-rtf.png"
              alt="IRIT-RTF Logo"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
