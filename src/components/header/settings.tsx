import { MdGTranslate } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';

export const PageSettings = () => {
  return (
    <ul className="flex justify-center items-center gap-2 z-[51]">
      <li className="text-primary text-[28px] w-[45px] h-[45px] bg-[#eee] rounded-full flex justify-center items-center">
        <MdGTranslate />
      </li>
      <li className="text-primary text-[28px] w-[45px] h-[45px] bg-[#eee] rounded-full flex items-center justify-center">
        <IoSunnyOutline />
      </li>
    </ul>
  );
};
