import clsx from "clsx";

type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {};

export const Textarea = ({ className, ...props }: InputProps) => {
  return (
    <textarea
      className={clsx(
        "min-h-[100px] border-2 border-accent px-4 py-3 outline-orange",
        className,
      )}
      {...props}
    />
  );
};
