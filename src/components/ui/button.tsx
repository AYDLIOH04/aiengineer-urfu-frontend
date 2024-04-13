import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isPending?: boolean;
  withPending?: boolean;
};

export const Button = ({
  children,
  className,
  isPending = false,
  withPending = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isPending}
      className={clsx(
        "flex cursor-pointer items-center justify-center rounded-md bg-orange px-8 py-3 text-[16px] font-semibold text-white duration-200 hover:opacity-80 disabled:opacity-50 dark:text-backgroundAccent sm:px-14 sm:py-4 md:text-[22px]",
        className,
      )}
      {...props}
    >
      {(withPending && isPending) ? (
        <>
          <span className="relative">
            <span className="absolute -left-8 top-1.5 mr-4 inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] dark:text-backgroundAccent" />
            Отправка...
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
