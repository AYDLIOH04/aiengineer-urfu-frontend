import { IoMdClose, IoMdMenu } from 'react-icons/io';

export const MenuBurger = ({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) => {
  const BurgerIcon = open ? IoMdClose : IoMdMenu;

  return (
    <div
      onClick={onToggle}
      className="text-primary text-[28px] w-[45px] h-[45px] hover:bg-foreground dark:hover:bg-backgroundAccent z-[51] rounded-full flex justify-center items-center hover:opacity-80 duration-200 cursor-pointer"
    >
      <BurgerIcon />
    </div>
  );
};
