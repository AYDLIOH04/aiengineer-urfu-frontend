import { RiAdminFill } from "react-icons/ri";

export const AdminDashboard = () => {
  return (
    <li className="dark:hover:bg-backgroundAccent flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full text-[28px] text-primary duration-200 hover:bg-foreground">
      <RiAdminFill />
    </li>
  );
};