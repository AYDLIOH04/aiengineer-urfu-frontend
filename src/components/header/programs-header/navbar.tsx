import { headerLinks } from '@/constants';
import Link from 'next/link';
import { scrollToId } from '@/utils';

const linkStyles =
  'text-accent text-[20px] font-[400] cursor-pointer relative after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:h-1 after:rounded-md after:-bottom-1 after:left-1/2 after:bg-accent after:absolute';

export const Navbar = () => {
  return (
    <ul className="xl:flex hidden justify-between items-center gap-10">
      <Link href="/" className={linkStyles}>
        Главная страница
      </Link>
      {headerLinks.map((link) => (
        <a
          key={link.id}
          className={linkStyles}
          onClick={() => scrollToId(link.href)}
        >
          {link.label}
        </a>
      ))}
    </ul>
  );
};
