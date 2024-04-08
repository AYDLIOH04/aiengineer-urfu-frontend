import clsx from "clsx";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "border-2 border-accent bg-transparent px-4 py-3 outline-orange",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
