import { useState } from 'react';
import { MenuBurger } from './burger';
import { MenuNavbar } from './navbar';

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  
  const onMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex xl:hidden">
      <MenuBurger open={menuOpen} onToggle={onMenuToggle} />
      <MenuNavbar open={menuOpen} onClose={onMenuClose} />
    </div>
  );
};
