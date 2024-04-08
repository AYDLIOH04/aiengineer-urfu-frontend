import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isPending?: boolean;
};

export const Button = ({
  children,
  className,
  isPending = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isPending}
      className={clsx(
        "disabled:opacity-50 cursor-pointer rounded-md bg-orange px-8 py-3 text-[16px] font-semibold text-white duration-200 hover:opacity-80 dark:text-backgroundAccent sm:px-14 sm:py-4 md:text-[22px] flex justify-center items-center",
        className,
      )}
      {...props}
    >
      {isPending ? (
        <>
          <span className="relative">
            <span className="absolute -left-8 top-0.5 mr-4 inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] dark:text-backgroundAccent" />
            Отправка...
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
