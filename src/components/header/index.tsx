'use client';

import { useScrollOffset } from '@/hooks';
import Image from 'next/image';
import { PageSettings } from './settings';
import { Menu } from './menu';
import { Navbar } from './navbar';
import clsx from 'clsx';

export const Header = () => {
  const scrolled = useScrollOffset(80);

  return (
    <header
      className={clsx(
        'h-[60px] z-[50] fixed top-0 left-0 right-0 bg-header',
        { 'shadow-md': scrolled }
      )}
    >
      <div className="header-container">
        <nav className="flex justify-between items-center">
          <Image
            className="my-[5px]"
            src="/logo-irit-rtf.png"
            alt="IRIT-RTF Logo"
            width={86}
            height={50}
          />
          <Navbar />
          <div className="flex gap-2">
            <PageSettings />
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
};
