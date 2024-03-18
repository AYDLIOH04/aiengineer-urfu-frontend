'use client';

import Image from 'next/image';
import { headerLinks } from '@/constants';
import Link from 'next/link';
export const Header = () => {
  const scrollToId = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="h-[60px]">
      <div className="header-container">
        <nav className="flex justify-between items-center">
          <Image
            className="my-[5px]"
            src="/irit-rtf-logo.svg"
            alt="IRIT-RTF Logo"
            width={86}
            height={50}
          />
          <ul className="flex justify-between items-center gap-10">
            <Link
              href="/"
              className="text-accent text-[20px] font-[400] cursor-pointer"
            >
              Все программы
            </Link>
            {headerLinks.map((link) => (
              <a
                key={link.id}
                className="text-accent text-[20px] font-[400] cursor-pointer"
                onClick={() => scrollToId(link.href)}
              >
                {link.label}
              </a>
            ))}
          </ul>
          <ul className="flex justify-center items-center gap-[10px]">
            <li className="w-[45px] h-[45px] bg-[#eee] rounded-full"></li>
            <li className="w-[45px] h-[45px] bg-[#eee] rounded-full"></li>
            <li className="w-[45px] h-[45px] bg-[#eee] rounded-full"></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
