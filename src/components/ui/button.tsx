import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-md bg-orange px-8 py-3 text-[16px] font-semibold text-white duration-200 hover:opacity-80 sm:px-14 sm:py-4 md:text-[22px] dark:text-backgroundAccent cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
