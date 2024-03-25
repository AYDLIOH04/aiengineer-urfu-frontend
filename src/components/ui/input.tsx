import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        "border-2 border-accent bg-transparent px-4 py-3 outline-orange",
        className,
      )}
      {...props}
    />
  );
};
