import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'bg-orange hover:opacity-80 duration-200 text-secondary text-[22px] px-[54px] py-4',
        className
      )}
    >
      {children}
    </button>
  );
};
