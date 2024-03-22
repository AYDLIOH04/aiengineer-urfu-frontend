import { VkIcon } from "@/components/svg";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = ({ data }: { data: any }) => {
  const { institute, website, telegramLink, vkLink, commission } = data;
  return (
    <footer className="flex min-h-[300px] flex-col justify-between bg-footer py-10 text-secondary">
      <div className="footer-container flex flex-row flex-wrap gap-20 text-[18px] md:gap-0 md:text-[20px] xl:flex-nowrap xl:gap-10">
        <div className="w-full text-center md:w-1/2 md:text-start xl:w-1/3">
          <h4 className="mb-5">{institute}</h4>
          <Link href={website.link} target="_blank" className="hover:underline">
            <p className="font-semibold">{website.label}</p>
          </Link>
        </div>
        <div className="w-full text-center md:w-1/2 md:text-end xl:w-1/3 xl:text-start">
          <h4 className="mb-5">{commission.name}</h4>
          <p className="font-semibold">{commission.telephone}</p>
          <p className="font-semibold">{commission.email}</p>
        </div>
        <div className="mb-10 w-full md:my-10 xl:my-0 xl:w-1/3">
          <h4 className="mb-5 text-center">Мы в социальных сетях</h4>
          <div className="flex flex-row justify-center gap-4">
            <Link
              href={telegramLink}
              target="_blank"
              className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-foreground duration-200 hover:opacity-90"
            >
              <FaTelegramPlane className="text-[26px] text-footer" />
            </Link>
            <Link
              href={vkLink}
              target="_blank"
              className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-foreground duration-200 hover:opacity-90"
            >
              <VkIcon className="text-[26px] text-footer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <p className="text-[16px] md:text-[20px]">
          © ФГАОУ ВО “Уральский федеральный университет”
        </p>
      </div>
    </footer>
  );
};
